/*
MIT License

Copyright (c) 2021 Cyril Dever

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { decode } from '.'

/**
 * Base62 expects its string representation at instantiation
 */
export class Base62 {
  str: string
  val: number | undefined

  constructor(str: string) {
    try {
      this.val = decode(str)
      this.str = str
    } catch (_) { // eslint-disable-line @typescript-eslint/no-unused-vars
      this.str = ''
    }
  }

  toBuffer(): Buffer {
    return Buffer.from(this.str, 'utf-8')
  }

  toString(): string {
    return this.str
  }

  /**
   * @returns the value associated with the base62 string representation if any, or `-1` if undefined
   */
  value(): number {
    return this.val !== undefined ? this.val : -1
  }
}
