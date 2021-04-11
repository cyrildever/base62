# base62-ts
_Custom Base-62 Encoder_

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/cyrildever/base62)
![GitHub last commit](https://img.shields.io/github/last-commit/cyrildever/base62)
![GitHub issues](https://img.shields.io/github/issues/cyrildever/base62)
![npm](https://img.shields.io/npm/dw/base62-ts)
![NPM](https://img.shields.io/npm/l/base62-ts)

This repository contains the version of my encoder/decoder for Base-62 in two languages:
* [Golang](https://github.com/cyrildever/base62);
* TypeScript.


### Motivation

I needed an efficient way to apply a Base-62 encoding/decoding algorithm working the same way in TypeScript/Javascript and in Golang environments.


### Usage

Both versions use the same following dictionary:

| Value | Character | Value | Character | Value | Character | Value | Character | Value | Character |
|:-----:|:---------:|:-----:|:---------:|:-----:|:---------:|:-----:|:---------:|:-----:|:---------:|
|   0   |    `0`    |   13  |    `d`    |   26  |    `q`    |   39  |    `D`    |   52  |    `Q`    |
|   1   |    `1`    |   14  |    `e`    |   27  |    `r`    |   40  |    `E`    |   53  |    `R`    |
|   2   |    `2`    |   15  |    `f`    |   28  |    `s`    |   41  |    `F`    |   54  |    `S`    |
|   3   |    `3`    |   16  |    `g`    |   29  |    `t`    |   42  |    `G`    |   55  |    `T`    |
|   4   |    `4`    |   17  |    `h`    |   30  |    `u`    |   43  |    `H`    |   56  |    `U`    |
|   5   |    `5`    |   18  |    `i`    |   31  |    `v`    |   44  |    `I`    |   57  |    `V`    |
|   6   |    `6`    |   19  |    `j`    |   32  |    `w`    |   45  |    `J`    |   58  |    `W`    |
|   7   |    `7`    |   20  |    `k`    |   33  |    `x`    |   46  |    `K`    |   59  |    `X`    |
|   8   |    `8`    |   21  |    `l`    |   34  |    `y`    |   47  |    `L`    |   60  |    `Y`    |
|   9   |    `9`    |   22  |    `m`    |   35  |    `z`    |   48  |    `M`    |   61  |    `Z`    |
|   10  |    `a`    |   23  |    `n`    |   36  |    `A`    |   49  |    `N`    |       |           |
|   11  |    `b`    |   24  |    `o`    |   37  |    `B`    |   50  |    `O`    |       |           |
|   12  |    `c`    |   25  |    `p`    |   38  |    `C`    |   51  |    `P`    |       |           |

In other words, they use the following base: `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.

```console
npm i base62-ts
```

```typescript
import * as base62 from 'base62-ts'

const value = 18969

const encoded = base62.encode(value)

// 4VX
console.log(encoded)

const decoded = base62.decode(encoded)

console.assert(value === decoded)
```


### Dependencies

base62-ts depends on my general utility library for computing euclidean division: [ts-utls](https://www.npmjs.com/package/ts-utls).


### License

Both versions are available under an MIT license (see [LICENSE](LICENSE)).


<hr />
&copy; 2021 Cyril Dever. All rights reserved