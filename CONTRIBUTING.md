# Contributing to ZEBL Cape Town

Thank you for helping learners build safely and openly.

## Before you contribute

- Read the [youth safeguarding policy](safeguarding/youth-safeguarding-policy.md).
- Do not include seed phrases, private keys, real addresses, personal data, or credentials in issues, commits, examples, or screenshots.
- Use testnet only. Never request or send mainnet funds for a curriculum exercise.
- Check technical claims against current upstream Zcash documentation before changing them.
- Do not recommend wallets that no longer support Zcash (including Nighthawk). Confirm store listings the week of a workshop.
- Keep `starters/nodejs-grpc-starter/lightwalletd.proto` field numbers and types aligned with [lightwallet-protocol](https://github.com/zcash/lightwallet-protocol).
- Do not commit filled facilitator runbooks, consent forms, or `.env` files.

## Workflow

1. Open an issue describing the learning goal or problem.
2. Create a focused branch and make a small, reviewable change.
3. Use clear Markdown headings, accessible language, and South African English where appropriate.
4. For starter changes, run `node --check starters/nodejs-grpc-starter/index.js` from the repository root. After dependency edits, run `npm install` in `starters/nodejs-grpc-starter` so `package-lock.json` stays in sync.
5. If you change endpoints, wallets, or TLS guidance, update [docs/facilitator-runbook.md](docs/facilitator-runbook.md) in the same pull request.
6. Submit a pull request explaining the audience, learning objective, and how you tested the change.

All contributions must be compatible with the MIT License. Maintainers may request safeguarding, accessibility, or technical review before merging.
