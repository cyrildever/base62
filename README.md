# base62
_Custom Base-62 Encoder_

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/cyrildever/base62)
![GitHub last commit](https://img.shields.io/github/last-commit/cyrildever/base62)
![GitHub issues](https://img.shields.io/github/issues/cyrildever/base62)
![npm](https://img.shields.io/npm/dw/base62)
![NPM](https://img.shields.io/npm/l/base62)

This repository contains the version of my encoder/decoder for Base-62 in three languages:
* [Golang](go/);
* [Python](py/);
* [TypeScript](ts/).

The latter could be downloaded from its NPM repo: [https://www.npmjs.com/package/base62-ts](https://www.npmjs.com/package/base62-ts).


### Motivation

I needed an efficient way to apply a Base-62 encoding/decoding algorithm working the same way in TypeScript/Javascript, Python and Golang environments.

_**WARNING**: Decoding any wrongful string returns an error and `0`. You shouldn't use the latter._


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

For TypeScript:
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

For Go:
```console
go get github.com/cyrildever/base62
```

```golang
import "github.com/cyrildever/base62"

value := "4VX"

decoded, err := base62.Decode(value)

// 18969
fmt.Println(decoded)

encoded, err := base62.Encode(decoded)

assert.Equal(t, value, encoded)
```

For Python:
```console
pip install base62-py
```

```python
from base62 import decode, encode

value = 18969

encoded = encode(value)

# 4VX
print(encoded)

decoded = decode(encoded)

assert value == decoded
```


### License

All versions are available under a MIT license (see [LICENSE](LICENSE)).


<hr />
&copy; 2021-2025 Cyril Dever. All rights reserved.