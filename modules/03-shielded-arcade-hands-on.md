# 03 — Shielded Arcade: Hands-on Testnet Lab

This lab uses **testnet TAZ only**. TAZ is valueless test currency. Stop and ask a facilitator if an app asks for a seed phrase, spending key, payment, or identity document.

## 1. Install a wallet

Choose one wallet that explicitly supports Zcash testnet, such as Nighthawk or YWallet, from its official distribution channel. Advanced learners may use a CLI testnet wallet.

1. Create a new testnet wallet.
2. Write the recovery phrase on paper for this exercise only; do not photograph or upload it.
3. Set a device passcode and keep the phrase private.
4. Confirm the network label says **testnet**.

## 2. Generate a Unified Address

Open **Receive**, choose **Unified Address**, and copy the address. Use a fresh address for the faucet. Never paste a recovery phrase into a website.

## 3. Request TAZ

Open the facilitator-approved testnet faucet, paste the UA, complete its challenge, and request a small amount. Wait for the wallet to scan new blocks. The incoming transaction may remain pending until it has enough confirmations.

## 4. Send shielded TAZ

Pair up with another student and exchange only fresh testnet addresses.

1. Select **Send** and paste the recipient’s Unified Address.
2. Enter a tiny test amount and leave enough for the network fee.
3. Review the network and recipient address. Confirm it is not a real-money account.
4. Send and record the transaction ID, not your seed phrase.
5. Wait for the recipient wallet to scan and show the note.

The wallet may choose an Orchard or Sapling receiver. A “z-to-z” exercise means the value enters and leaves through shielded receivers; the exact pool depends on wallet support.

## 5. Verify safely

Open a Zcash **testnet** block explorer approved by the facilitator and search the transaction ID. You may see that a transaction exists, its confirmation status, and public technical metadata. You generally will not see shielded sender, recipient, or amount details in the same way as transparent transactions.

Do not post transaction IDs together with names or screenshots that expose balances.

## Troubleshooting

- **No funds:** confirm the UA is testnet and wait for faucet rate limits or confirmations.
- **Wallet is behind:** check the lightwalletd host, TLS setting, and device time.
- **Transaction pending:** shielded scanning and proving can take time on mobile devices.
- **Explorer shows little detail:** that is expected for shielded data; verify status and confirmation instead.

## Reflection

What did the faucet learn? What did the explorer learn? What remained private? Which assumptions did you make about the wallet, lightwalletd, and your device?

