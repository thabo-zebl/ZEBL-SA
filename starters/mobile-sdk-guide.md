# Mobile SDK guide

Use a maintained Zcash mobile SDK or wallet integration rather than implementing cryptography in an app workshop. Confirm current Android and iOS package names in the SDK’s official documentation before teaching a release.

## Integration pattern

1. Keep the seed and spending keys inside the wallet’s secure storage boundary.
2. Use a testnet network configuration and a facilitator-approved lightwalletd endpoint.
3. Show a Unified Address through a receive screen, not in analytics or logs.
4. Let the wallet SDK scan compact blocks and create proofs.
5. Display clear states: syncing, received, pending, confirmed, and failed.
6. Add a “What this app shares” screen explaining endpoint metadata.

## Backend boundary

A backend should normally receive public status data or an explicitly consented viewing key, never a seed phrase. Prefer a read-only backend that queries lightwalletd and returns only the fields the mobile screen needs. Rate-limit requests, redact addresses in logs, and use TLS.

## Classroom test

Run the app on testnet, request TAZ, receive a small shielded payment, and confirm that the app remains usable when lightwalletd is unavailable. Record no real personal information.

