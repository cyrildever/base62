# base62
_Custom Base-62 Encoder_

This repository contains the version of my encoder/decoder for Base-62 in two languages:
* [Golang](go/);
* [TypeScript](ts/).

The latter could be downloaded from its NPM repo: [https://www.npmjs.com/package/base62-ts](https://www.npmjs.com/package/base62-ts).


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

For TypeScript:
```console
npm i -base62-ts
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
go get github.com/cyrildever/base62/go
```

```golang
import base62 "github.com/cyrildever/base62/go"

value := "4VX"

decoded, err := base62.Decode(value)

// 18969
fmt.Println(decoded)

encoded, err := base62.Encode(decoded)

assert.Equal(t, value, encoded)
```


### License

Both versions are available under an MIT license (see [LICENSE](LICENSE)).


<hr />
&copy; 2021 Cyril Dever. All rights reserved