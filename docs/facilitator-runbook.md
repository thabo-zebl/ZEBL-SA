# Facilitator runbook

Complete this sheet the week of the workshop. Print the approved values in the room. Do not commit real phone numbers, private hostnames with credentials, or student data to git.

## Cohort details

| Item | Fill in before Day 1 |
|---|---|
| Cohort dates | |
| Venue (name only; do not publish a security layout) | |
| Safeguarding lead | |
| Emergency contact posted at registration | |
| Local emergency number | 112 / 10111 as appropriate |
| Consent-form retention period | e.g. until cohort end + 90 days, then destroy |
| Photo/video rule | Follow each consent form; default no photos of minors |

## Technical values (verify the morning of Day 1)

| Item | Example (replace) | Verified (initials / date) |
|---|---|---|
| Network | Zcash **testnet** only | |
| lightwalletd host:port | `lwd.example.tld:443` with TLS | |
| TLS required for students? | **Yes**, unless the student is on the facilitator loopback node | |
| Testnet faucet | [https://faucet.zecpages.com/](https://faucet.zecpages.com/) | |
| Testnet explorer | Facilitator-approved testnet explorer only | |
| Classroom wallets | **Zingo** (official store) with testnet selected | |
| Banned wallets | **Nighthawk** (no outgoing Zcash support) | |
| Node.js starter | `starters/nodejs-grpc-starter` | |

Re-check wallet store listings and the faucet URL the week you teach. Software and public endpoints change.

## Pre-flight checklist

- [ ] Parent/guardian consent collected for every participant aged 16–17; adult participants signed in.
- [ ] Two-adult supervision plan and staff identification.
- [ ] Safeguarding briefing delivered to mentors (see [youth safeguarding policy](../safeguarding/youth-safeguarding-policy.md)).
- [ ] lightwalletd reports `chainName` test/testnet, not main.
- [ ] TLS certificate is valid for the published hostname.
- [ ] Faucet accepts a fresh testnet Unified Address and delivers TAZ.
- [ ] Explorer shows the faucet transaction ID without exposing a student’s name.
- [ ] `node --check starters/nodejs-grpc-starter/index.js` passes on the classroom image.
- [ ] Starter against the published endpoint prints chain info (TLS for remote hosts).
- [ ] Board text: **TESTNET — NO REAL VALUE**. Never share seed phrases.

## Classroom network policy

- Students use the TLS endpoint you published.
- `--no-tls-very-insecure` may run only on `127.0.0.1` on a facilitator machine.
- Do not bind insecure gRPC to `0.0.0.0`.
- Do not ask students to install APKs, browser extensions, or wallets outside official channels.

## POPIA and records

Collect the minimum data needed for attendance and safety. Store consent forms and medical notes in a locked folder or encrypted drive, accessible only to the safeguarding lead and designated deputies. Do not put those records in this repository, in chat, or in screenshots.

Destroy paper and digital copies when the retention period in the table above ends, unless a safeguarding investigation requires a longer hold. That hold is need-to-know only.

This runbook is operational guidance. It does not replace the Protection of Personal Information Act or child-protection law.

## Day-of teaching reminders

- Day 1 afternoon is [wallet setup only](../modules/03a-day1-wallet-setup.md) (install, UA, faucet).
- Day 2 morning is the [Node starter](../starters/nodejs-grpc-starter/README.md), then [shielded send/verify](../modules/03b-day2-shielded-payments.md).
- Day 2 prototype default is Node.js. Approve a mobile team only if devices and official SDKs are already working.
- If a seed is exposed: stop, tell the safeguarding lead privately, discard that testnet wallet, create a new one.
