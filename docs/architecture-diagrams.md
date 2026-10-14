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

The wallet asks lightwalletd for compact blocks and broadcasts transactions through the wallet service. Lightwalletd is not a replacement for consensus: the wallet verifies the relevant transaction and note commitments.

## Student application

```mermaid
flowchart TD
  UI[Student app] --> API[Small backend]
  API --> LWD[lightwalletd gRPC]
  LWD --> CHAIN[Zcash testnet]
  UI -. never sends .-> KEYS[Seed phrase / spending key]
```

Keep the backend read-only when possible. If a prototype broadcasts transactions, use a wallet library designed for that purpose and document who controls keys.

