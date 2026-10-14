# Node.js lightwalletd gRPC starter

This read-only starter connects to a Zcash testnet lightwalletd service, prints chain information, fetches the latest block ID, and streams a small block range. It does not create wallets, handle private keys, or broadcast transactions.

## Requirements

- Node.js 18+
- Network access to a facilitator-approved testnet lightwalletd endpoint
- A TLS endpoint in production. The default example is local/insecure for development only.

## Run

```bash
npm install
LIGHTWALLETD_URL=localhost:9067 npm start
```

For a remote classroom service, replace `localhost:9067` with the TLS endpoint published by the facilitator and set `LIGHTWALLETD_TLS=true`.

For a local classroom service:

```bash
LIGHTWALLETD_URL=localhost:9067 npm start
```

Optional variables:

- `LIGHTWALLETD_TLS=true` to use TLS credentials.
- `SYNC_BLOCKS=3` to change the number of recent blocks requested.

The included `lightwalletd.proto` is a minimal client definition for the read-only RPCs used here. Keep it aligned with the lightwalletd version you deploy.

## Safety

Do not put seed phrases, spending keys, faucet credentials, or personal data in environment variables or source files. Use a read-only service account or endpoint policy where your deployment supports it. The endpoint can observe network metadata, so explain this to learners.
