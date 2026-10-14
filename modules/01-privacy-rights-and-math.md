# 01 — Privacy Rights and the Math of Trust

## Why privacy matters

Privacy is not about hiding wrongdoing. It helps people avoid profiling, coercion, embarrassment, discrimination, and unwanted exposure. A payment can reveal a relationship, a location, a health decision, or a person’s financial situation. In Cape Town, as anywhere, people deserve agency over these disclosures.

## A tiny bit of math

Cryptography turns simple operations into hard-to-reverse commitments:

- A **hash** maps data to a fixed-looking fingerprint. Changing one character changes the fingerprint.
- A **digital signature** proves that whoever controls a private key approved a message.
- A **commitment** lets a person commit to a value without revealing it immediately.

These primitives are combined into protocols. Do not think of a blockchain as “encrypted data”; much blockchain data is public. Think of it as a shared record with carefully designed proofs and commitments.

## zk-SNARK intuition

zk-SNARK means *zero-knowledge succinct non-interactive argument of knowledge*. The full mathematics is advanced, but the classroom model is:

> “I can prove that I know a valid secret and followed the rules, while revealing neither the secret nor unnecessary details.”

In a shielded payment, the proof can cover authorisation, value balance, and valid note creation. The chain checks the proof; observers do not receive the sender, receiver, and amount in plain view.

## Activity

Write a public statement and a private witness for a school-club example. Then list the minimum facts a verifier needs. This is the habit behind privacy-by-design: disclose the minimum necessary information.
