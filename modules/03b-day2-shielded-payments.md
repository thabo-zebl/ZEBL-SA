# 03b — Day 2: Shielded send and verify

Complete [Day 1 wallet setup](03a-day1-wallet-setup.md) first. Use the same testnet wallet. Do not create a second seed unless the first wallet is broken.

This lab uses **testnet TAZ only**.

## 1. Send shielded TAZ

Pair up with another student and exchange only fresh testnet Unified Addresses.

1. Select **Send** and paste the recipient’s Unified Address.
2. Enter a tiny test amount and leave enough for the network fee.
3. Review the network and recipient address. Confirm it is not a real-money account.
4. Send and record the transaction ID, not your seed phrase.
5. Wait for the recipient wallet to scan and show the note.

The wallet may choose an Orchard or Sapling receiver. A “z-to-z” exercise means the value enters and leaves through shielded receivers; the exact pool depends on wallet support.

## 2. Verify safely

Open a Zcash **testnet** block explorer approved by the facilitator and search the transaction ID. You may see that a transaction exists, its confirmation status, and public technical metadata. You generally will not see shielded sender, recipient, or amount details in the same way as transparent transactions.

Do not post transaction IDs together with names or screenshots that expose balances.

## Troubleshooting

- **Transaction pending:** shielded scanning and proving can take time on mobile devices.
- **Explorer shows little detail:** that is expected for shielded data; verify status and confirmation instead.
- **Send fails:** confirm both wallets are still on testnet and that the sender has a confirmed faucet note plus fee.

## Reflection

What did the faucet learn? What did the explorer learn? What remained private? Which assumptions did you make about the wallet, lightwalletd, and your device?
