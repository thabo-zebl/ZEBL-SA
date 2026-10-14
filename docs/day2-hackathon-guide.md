# Day 2: Hackathon Guide

## Default stack

Build with the [Node.js lightwalletd starter](../starters/nodejs-grpc-starter/README.md). Mobile is optional and only for teams a facilitator has already approved; see the [mobile SDK guide](../starters/mobile-sdk-guide.md).

Morning lab: complete [Shielded Arcade send and verify](../modules/03b-day2-shielded-payments.md) before the prototype slot.

## Challenge

Build a small educational tool that reads public testnet information or helps a user understand a shielded payment. Good projects include a block-height dashboard, a transaction-status explainer, a viewing-key consent screen, or a wallet onboarding checklist.

## Constraints

- Use testnet only and label the interface **TESTNET — NO REAL VALUE**.
- Never ask for a seed phrase or spending key.
- Minimise personal data and do not log addresses by default.
- Use a privacy-respecting design: explain what is sent to which server.
- Include a README with setup, threat assumptions, and a short demo script.
- Call only read-only lightwalletd RPCs unless a wallet SDK, not your backend, holds keys.

## Suggested 90-minute plan

1. **10 minutes:** choose a problem and sketch the user flow.
2. **20 minutes:** create a minimal working slice using the Node starter.
3. **30 minutes:** implement one useful feature and one error state.
4. **15 minutes:** test with a partner and remove confusing or sensitive UI.
5. **15 minutes:** prepare a two-minute demo.

## Demo rubric

| Criterion | Excellent evidence |
|---|---|
| User value | A learner can explain who the tool helps and why. |
| Technical accuracy | The demo distinguishes testnet from mainnet and uses correct address language. |
| Privacy | Secrets are not collected; network disclosures are explained. |
| Reliability | Loading, invalid input, and endpoint failure states are visible. |
| Communication | The team presents a clear architecture and a next step. |

## Handoff checklist

- `README.md` includes install and run commands.
- No secrets or personal data are committed.
- The UI and screenshots say testnet.
- The team can explain its lightwalletd trust assumptions.
- The project has an MIT-compatible license or is contributed to this repository under MIT.
