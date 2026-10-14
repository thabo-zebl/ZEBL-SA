# ZEBL Cape Town Curriculum

> **Zcash Early Builders Lab (ZEBL) Cape Town**  
> A practical, youth-friendly introduction to privacy-preserving digital payments and zero-knowledge technology.

## About the programme

ZEBL Cape Town is a two-day, open-source onboarding workshop for upper-secondary students and university students in Cape Town, South Africa (ages 16–22). Students learn how Zcash testnet works, why financial privacy matters, how zero-knowledge proofs support shielded transactions, and how to build a small application using a lightwalletd backend.

This curriculum is educational: every transaction in the workshop uses **testnet TAZ**, which has no real-world monetary value. Students should never share seed phrases, spending keys, passwords, or personal information in class channels.

### Learning outcomes

By the end of the lab, learners can:

- Describe the difference between transparent and shielded transaction pools.
- Explain the intuition behind zk-SNARKs without needing advanced cryptography.
- Identify Sprout, Sapling, Orchard, transparent addresses, Unified Addresses, and viewing keys.
- Create a testnet wallet, request TAZ, make a shielded payment, and verify it on a testnet explorer.
- Query a lightwalletd endpoint from Node.js and reason about mobile/backend integration.
- Apply basic privacy, safety, consent, and responsible disclosure practices.

### Prerequisites

- A laptop with a current browser and Node.js 18 or newer.
- Basic command-line familiarity and beginner JavaScript knowledge.
- A phone is useful for a mobile-wallet exercise but is not required.
- A parent/guardian consent form for participants aged 16–17.
- No cryptocurrency purchase, bank account, or prior blockchain experience is required.

## Two-day schedule

| Time | Day 1 — Understand privacy | Day 2 — Build and share |
|---|---|---|
| 09:00–09:30 | Welcome, introductions, community agreements | Recap and team formation |
| 09:30–10:45 | Privacy rights and digital identity | Node.js lightwalletd starter (default prototype path) |
| 11:00–12:30 | Money, hashes, and zero-knowledge intuition | Shielded Arcade: send and verify |
| 13:30–14:30 | Zcash architecture and address types | Viewing keys and selective disclosure |
| 14:45–16:00 | Testnet wallet setup (install, UA, faucet) | Build a small Node.js prototype |
| 16:00–16:45 | Reflection and troubleshooting | Demo preparation |
| 16:45–17:00 | Check-out | Demos, feedback, and next steps |

Wallet setup is Day 1 only. Shielded send/verify is Day 2. Mobile prototypes are optional and need facilitator approval; see the [mobile SDK guide](starters/mobile-sdk-guide.md).

## Quick start: local testnet access

The public lightwalletd endpoint and faucet can change. Facilitators should complete the [facilitator runbook](docs/facilitator-runbook.md) before the workshop and publish approved values in the room. Never ask students to trust an endpoint that does not use TLS.

### Connect a wallet

1. Install a testnet-capable wallet from its official release channel. The classroom default is **Zingo** (mobile or desktop) with **testnet** selected. Experienced learners may use `zingo-cli`. Do **not** use Nighthawk.
2. Select **testnet** (`testnet`/`Zcash testnet`), not mainnet.
3. In advanced server settings, enter the facilitator-approved lightwalletd hostname and **TLS** port. A common lightwalletd port is `9067` or `443`; the exact host is deployment-specific.
4. Confirm the wallet reports a testnet network and a recent block height before requesting funds.

### Run a local lightwalletd (facilitators)

Run a local `zcashd` testnet node first, then point lightwalletd at its RPC interface. The exact binaries and flags depend on the release being used; use the version-matched upstream documentation.

Bind only to loopback for an insecure classroom node:

```bash
./lightwalletd \
  --zcash-conf=/path/to/zcash.conf \
  --grpc-bind-addr=127.0.0.1:9067 \
  --http-bind-addr=127.0.0.1:9068 \
  --no-tls-very-insecure
```

`--no-tls-very-insecure` is suitable only on `127.0.0.1` for a facilitator laptop or an isolated workstation. Do not bind `0.0.0.0` without TLS. For a shared classroom or public endpoint, configure TLS certificates, use the secure gRPC port, restrict firewall access, and do not expose node RPC credentials.

Students then run the [Node.js starter](starters/nodejs-grpc-starter/README.md) with `LIGHTWALLETD_INSECURE=true` only when the URL is loopback.

### Receive testnet TAZ

1. Copy only the new testnet Unified Address from the wallet.
2. Open the facilitator-approved testnet faucet.
3. Paste the address, solve the anti-abuse challenge, and request a small amount of TAZ.
4. Wait for the wallet to scan and confirm the incoming note. Testnet confirmations may take a few minutes.
5. Treat TAZ as disposable classroom data; it cannot be exchanged for South African rand or any other value.

## Contents

### Workshop guides

- [Day 1: ZK fundamentals](docs/day1-zk-fundamentals.md)
- [Day 2: Hackathon guide](docs/day2-hackathon-guide.md)
- [Facilitator runbook](docs/facilitator-runbook.md)
- [Architecture diagrams](docs/architecture-diagrams.md)

### Core modules

- [01 — Privacy rights and math](modules/01-privacy-rights-and-math.md)
- [02 — Zcash architecture and addresses](modules/02-zcash-architecture-and-addresses.md)
- [03 — Shielded Arcade overview](modules/03-shielded-arcade-hands-on.md)
- [03a — Day 1 wallet setup](modules/03a-day1-wallet-setup.md)
- [03b — Day 2 shielded send and verify](modules/03b-day2-shielded-payments.md)
- [04 — Viewing keys and compliance](modules/04-viewing-keys-and-compliance.md)

### Starters

- [Node.js gRPC starter README](starters/nodejs-grpc-starter/README.md)
- [Node.js starter package](starters/nodejs-grpc-starter/package.json)
- [Mobile SDK guide](starters/mobile-sdk-guide.md) (optional path)

### Safeguarding

- [Parental consent template](safeguarding/parental-consent-template.md)
- [Youth safeguarding policy](safeguarding/youth-safeguarding-policy.md)

## Contributing and licensing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. This project is released under the [MIT License](LICENSE).

ZEBL Cape Town is an independent educational community project. We gratefully acknowledge support from **Zcash Community Grants (ZCG)**. Grant support does not make ZCG responsible for individual workshop advice, wallet software, or student projects.

## Responsible use

Zcash tools can protect legitimate privacy, but privacy technology must be used lawfully and ethically. This curriculum does not provide financial, legal, tax, or investment advice. Facilitators should adapt examples to South African law and refer questions about regulated activity to qualified professionals.
