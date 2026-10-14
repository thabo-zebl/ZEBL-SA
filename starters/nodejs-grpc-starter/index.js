'use strict';

const path = require('node:path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const endpoint = process.env.LIGHTWALLETD_URL || 'localhost:9067';
const useTls = process.env.LIGHTWALLETD_TLS === 'true';
const blockCount = Math.max(1, Math.min(Number(process.env.SYNC_BLOCKS || 3), 20));
const protoPath = path.join(__dirname, 'lightwalletd.proto');

const definition = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const rpc = grpc.loadPackageDefinition(definition).cash.z.wallet.sdk.rpc;
const credentials = useTls
  ? grpc.credentials.createSsl()
  : grpc.credentials.createInsecure();
const client = new rpc.CompactTxStreamer(endpoint, credentials);

function call(method, request) {
  return new Promise((resolve, reject) => {
    client[method](request, (error, response) => {
      if (error) reject(error);
      else resolve(response);
    });
  });
}

function readBlocks(range) {
  return new Promise((resolve, reject) => {
    const blocks = [];
    const stream = client.GetBlockRange(range);
    stream.on('data', (block) => blocks.push({
      height: block.height,
      hash: Buffer.from(block.hash || []).toString('hex'),
      time: block.time
    }));
    stream.on('end', () => resolve(blocks));
    stream.on('error', reject);
  });
}

async function main() {
  console.log(`Connecting to ${endpoint} (${useTls ? 'TLS' : 'insecure/local'} mode)`);
  const info = await call('GetLightdInfo', {});
  console.log(`Server: ${info.vendor || 'unknown'} | chain: ${info.chain || 'unknown'} | sapling: ${info.saplingActivationHeight || 'unknown'}`);

  const latest = await call('GetLatestBlock', {});
  const height = Number(latest.height);
  console.log(`Latest height: ${height} (${latest.hash.toString('hex')})`);

  const start = Math.max(0, height - blockCount + 1);
  const blocks = await readBlocks({
    start: { height: String(start) },
    end: { height: String(height) }
  });
  console.log(`Read ${blocks.length} compact block(s):`);
  for (const block of blocks) {
    console.log(`- ${block.height}: ${block.hash}`);
  }
}

main().catch((error) => {
  console.error(`lightwalletd request failed: ${error.message}`);
  process.exitCode = 1;
});
