# numit

Just an iterator for numbers to generate arrays.

# Installation

**npm**

```sh
npm i numit
```

# Usage

```javascript
require("numit"); // First require it

// examples
[...10] // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[...-10] // => [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
[...0] // => []
[...Infinity] // throws exception (e.g. must be safe integer)

// low-level
Number.range(10); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# Testing

For testing first install all dependencies

```sh
npm install
```

Test command:

```sh
npm run test
```