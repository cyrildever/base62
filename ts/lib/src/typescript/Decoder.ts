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

import { CHARSET } from '.'

/**
 * 
 * @param value 
 * @returns 
 * @throws not a base-62 input
 */
export const decode = (value: string): number => {
  let decoded = 0
  /* eslint-disable no-loops/no-loops */
  for (let i = 0; i < value.length; i++) {
    const idx = value.length - i - 1
    const n = CHARSET.indexOf(value[idx])
    if (n === -1) {
      throw new Error('not a base-62 input')
    }
    decoded += n * Math.pow(62, i)
  }
  /* eslint-enable no-loops/no-loops */
  return decoded
}
