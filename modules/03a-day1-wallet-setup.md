# 03a — Day 1: Testnet wallet setup

Complete this session on Day 1. Do not send payments until Day 2.

This lab uses **testnet TAZ only**. Stop and ask a facilitator if an app asks for a seed phrase, spending key, payment, or identity document.

## 1. Install a wallet

Choose one wallet that explicitly supports **Zcash testnet** from its official store or release page. As of this curriculum revision, classroom defaults are:

- **Zingo** (mobile or desktop): create a new wallet and select **testnet**, not mainnet.
- **zingo-cli** or another maintained CLI, for experienced learners only.

**Do not install Nighthawk** for this lab. Nighthawk ended outgoing Zcash support.

Zodl (formerly Zashi) is a current Zcash wallet, but the public store builds are typically mainnet. Do not sideload unofficial APKs. Only use a Zodl/Zashi testnet build if a facilitator supplies it from the official project.

1. Create a **new** testnet wallet for this workshop. Do not reuse a mainnet wallet.
2. Write the recovery phrase on paper for this exercise only; do not photograph or upload it.
3. Set a device passcode and keep the phrase private.
4. Confirm the network label says **testnet**.

## 2. Point the wallet at the classroom server

If the wallet allows a custom server, enter only the facilitator-approved **TLS** lightwalletd host and port from the board. A common gRPC port is `9067` or `443`; the host is deployment-specific.

Confirm the wallet reports a testnet network and a recent block height before requesting funds.

## 3. Generate a Unified Address

Open **Receive**, choose **Unified Address**, and copy the address. Use a fresh address for the faucet. Never paste a recovery phrase into a website.

## 4. Request TAZ

Open the facilitator-approved testnet faucet (often [faucet.zecpages.com](https://faucet.zecpages.com/); confirm on the day), paste the UA, complete its challenge, and request a small amount. Wait for the wallet to scan new blocks. The incoming transaction may remain pending until it has enough confirmations.

Treat TAZ as disposable classroom data; it cannot be exchanged for rand or any other value.

## Troubleshooting

- **No funds:** confirm the UA is testnet and wait for faucet rate limits or confirmations.
- **Wallet is behind:** check the lightwalletd host, TLS setting, and device time.
- **Store app has no testnet toggle:** switch to Zingo or a facilitator-approved CLI. Do not change to mainnet.

## Exit ticket

Write down (on paper, not in chat): wallet name, that the network is testnet, and whether the faucet payment has confirmed. Keep the recovery phrase off shared screens.
