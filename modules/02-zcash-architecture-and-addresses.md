# 02 — Zcash Architecture and Addresses

## Transaction pools

Zcash supports transparent and shielded activity:

- **Transparent pool:** addresses and values resemble ordinary public blockchain data. This is useful for compatibility, but an observer can inspect the ledger history.
- **Shielded pools:** cryptographic proofs and encrypted note data protect transaction details from ordinary observers.

Historically, shielded protocols include:

- **Sprout:** the original shielded pool, now legacy technology.
- **Sapling:** improved proving performance and wallet usability.
- **Orchard:** the modern shielded protocol, designed around the Halo 2 proving system and unified address use.

Wallets may support more than one pool. Always check which pool a testnet transaction uses.

## Address types

- A transparent address begins with a transparent-prefix format and is publicly inspectable.
- A legacy shielded address may begin with `z` (for example, a Sapling address).
- A **Unified Address (UA)** can contain receivers for transparent, Sapling, and Orchard pools. A sender can pay one UA while the wallet selects an appropriate receiver.

Do not infer a person’s identity from an address. An address is still sensitive personal data when it can be linked to a person.

## Viewing keys

Spending authority and viewing authority are different. A viewing key can allow someone to inspect selected incoming or outgoing information without giving them the ability to spend. The exact capabilities depend on the key type and wallet implementation.

## Check your understanding

Explain why a Unified Address improves wallet interoperability but does not make a user’s seed phrase safe to share. Then identify what a block explorer can and cannot show for a shielded transaction.

