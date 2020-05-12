## Background

A hash function is any function that can be used to map data of arbitrary size to data of fixed size. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. 

Hash functions are useful in cryptography. A cryptographic hash function allows one to easily verify that some input data maps to a given hash value, but if the input data is unknown, it is deliberately difficult to reconstruct it (or equivalent alternatives) by knowing the stored hash value. This is used for assuring integrity of transmitted data.

MD5 is a widely used hash function that produces 128-bit hash values. Although it has vulnerabilities that make it unsafe for cryptography (it can be cracked by brute-force attacks) it can still be used as a checksum to verify data integrity.

We can MD5-hash data in Node.js by using the core module `crypto`:

```javascript
// require the crypto module (no need to npm install, it's part of Node.js)
const crypto = require('crypto')

// create a Hash object using the 'md5' algorithm
const hash = crypto.createHash('md5')

// update the hash with some input data
hash.update('some data to hash')

// log the digest or hash value in hexadecimal
console.log(hash.digest('hex'))
// '527d738baba016840c3a33f2790845dd'
```

Note: We log the digest in hexadecimal because it's more human readable (and shorter!) than binary.

## The Problem

We need to figure out the password to a security door based on its ID (a string). Passwords are 8 character strings that are made of certain characters obtained by MD5-hashing the door ID plus an increasing numerical index.

The rules are as follows:

- An "interesting digest" is a digest that starts with four zeros in a row (`0000`).
- The character immediately after the four zeros of an "interesting digest" is one of the 8 characters of the password.
- The password is formed by the first "interesting characters" hashed from an input made of the door ID and a numerical index (starting from 0).

### Example

Let's say the door ID is `northcoders`. If we MD5-hash it followed by the number `0`, we obtain the digest `e90e02b80bb291cf6b9ce5fa9c7b3322` (in hexadecimal). This digest is not interesting because it doesn't start with four zeros.

If we continue searching for hashes by incrementing the numerical index the first interesting digest we find is `0000aca1ab3d6198abc63b77fcd8f1fe` at index `58291` (i.e. MD5-hashing the string `northcoders58291`). This means that the first character of the password is `a` because it's the character right after the four zeros.

## Task

Write a function that takes in a string input for the door ID and returns the 8 character password.

To check your function's output is correct, make a `POST` request to `https://nc-kata-solution.herokuapp.com/` with a body like:

```json
{
	"id": "md5Hashing",
	"input": ["arguments", "to", "the", "function"],
	"solution": "your function output"
}
```

and you will receive a response like:

```json
{
  "result": true
}
```

Please don't try the password for `northcoders` in our Gmail account, it **definitely** doesn't work.