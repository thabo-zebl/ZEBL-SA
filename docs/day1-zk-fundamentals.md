# Day 1: ZK Fundamentals

## Goals

Students will connect privacy to everyday life, model a transaction as a statement, and explain how a zk-SNARK lets someone prove a statement without revealing the secret behind it.

## Opening activity: privacy is contextual

Ask learners to sort these examples into “public”, “private”, and “depends on context”:

- A school club meeting time.
- A wallet balance.
- A medical appointment.
- A public GitHub username.
- A payment to a friend.

There is no single correct answer. The lesson is that privacy means control over who can learn what, when, and why.

## The proof game

One learner (the **prover**) secretly chooses a card with a shape and colour. Another learner (the **verifier**) asks questions. The prover must demonstrate “I know the card” without showing the card. Repeat with a trusted witness and discuss what information leaked.

Real zk-SNARKs use algebraic commitments and cryptographic checks rather than cards. The intuition is the same:

1. The prover creates a proof using secret witness data.
2. The verifier checks the proof against public inputs.
3. A valid proof gives high confidence that the statement is true.
4. The witness itself is not revealed.

## A Zcash example

The statement might be: “A valid note exists, I am authorised to spend it, the value is conserved, and the transaction obeys the protocol rules.” A shielded transaction can prove that statement while hiding the sender, receiver, and amount from ordinary chain observers.

This is not magic invisibility. Wallets, network metadata, timing, leaked addresses, or a voluntarily shared viewing key can still reveal information. Privacy is a system property and a user practice.

## Vocabulary check

- **Witness:** secret information used to construct a proof.
- **Commitment:** a cryptographic “sealed envelope” that can later be checked.
- **Nullifier:** a value that prevents the same shielded note being spent twice without revealing the note.
- **Verifier:** software that checks a proof.
- **Selective disclosure:** sharing only the information needed for a specific purpose.

## Exit ticket

In three sentences, explain how a proof can show “this payment is valid” without showing “every detail of this payment”. Name one kind of metadata that can still leak.

## Afternoon lab (14:45–16:00)

After architecture ([module 02](../modules/02-zcash-architecture-and-addresses.md)), run **wallet setup only**: install a testnet wallet, create a Unified Address, and request TAZ. Do not send peer-to-peer payments today.

Use [03a — Day 1 wallet setup](../modules/03a-day1-wallet-setup.md). Sending and explorer verification are [03b on Day 2](../modules/03b-day2-shielded-payments.md).

