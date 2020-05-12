## The Problem

The engineers that designed the password-encryption algorithm from the previous kata **all got fired** for obvious reasons.

The new engineers came up with a much more secure version:

- "Interesting digests" are still MD5-hashes of the door ID plus an increasing numerical index that start with four zeros (`0000`)
- The 5th character of an "interesting digest" is the position in the password string of the "interesting character".
- The 6th character of an "interesting digest" is an "interest character" that is part of the password string and goes in the position specified by the 5th character.
- 5th characters are invalid when they are not a number, when they are a number not in the range 0-7 or when they are a number that is the position of a "interesting character" that has already been found.

### Example

Let's say the door ID is `northcoders`. If we MD5-hash it followed by the number `0`, we obtain the digest `e90e02b80bb291cf6b9ce5fa9c7b3322` (in hexadecimal). This digest is not interesting because it doesn't start with four zeros.

If we continue searching for hashes by incrementing the numerical index the first potential digest we find is `0000aca1ab3d6198abc63b77fcd8f1fe` at index `58291` (i.e.  MD5-hashing the string `northcoders58291`). This is not an interesting digest because the 5th character is `a`, which is not a number in the range 0-7 (length of password).

If we continue searching for hashes by incrementing the numerical index, the first interesting digest we find is `00000804a8467de3668d74475237d3c0` with an input of `northcoders84304`. The 5th and 6th characters are `0` and `8`. That means that the password's character in position `0` is `8`.

We would keep searching for interesting digests until we fill positions 0 to 7, ignoring digests in positions that we've already found a character at.

## Task

Write a function that takes in a string input for the door ID and returns the 8 character password with the new rules. Try not to get engineers fired this time.

To check your function's output is correct, make a `POST` request to `https://nc-kata-solution.herokuapp.com/` with a body like:

```json
{
	"id": "md5HashingAdvanced",
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