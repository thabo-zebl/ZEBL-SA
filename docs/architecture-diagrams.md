# Architecture Diagrams

## Testnet wallet flow

```mermaid
flowchart LR
  W[Mobile or desktop wallet] -->|TLS gRPC| L[lightwalletd]
  L -->|RPC| N[Zcash testnet node]
  F[Testnet faucet] -->|TAZ transaction| N
  N --> C[Testnet chain]
  E[Block explorer] --> C
```

The wallet asks lightwalletd for compact blocks and broadcasts transactions through the wallet service. Lightwalletd is not a replacement for consensus: the wallet verifies the relevant transaction and note commitments. Student devices must use TLS. An insecure lightwalletd process is only for a facilitator loopback (`127.0.0.1`) node.

## Student application

```mermaid
flowchart TD
  UI[Student app] --> API[Small backend]
  API --> LWD[lightwalletd gRPC]
  LWD --> CHAIN[Zcash testnet]
  UI -. never sends .-> KEYS[Seed phrase / spending key]
```

Keep the backend read-only when possible. The default classroom prototype is the Node.js starter, which only calls `GetLightdInfo`, `GetLatestBlock`, and `GetBlockRange`. If a prototype broadcasts transactions, use a wallet library designed for that purpose and document who controls keys.

