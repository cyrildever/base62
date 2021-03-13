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

import { euclideanDivision } from 'ts-utls'

import { CHARSET } from '.'

/**
 * Encodes a decimal number to its base-62 string representation
 * 
 * @param {number} value - The number to encode 
 * @returns the base-62 string representation
 * @throws not an integer
 */
export const encode = (value: number): string => {
  if (!Number.isInteger(value)) {
    throw new Error('not an integer')
  }
  let b62 = ''
  let idx: number
  /* eslint-disable no-loops/no-loops */
  while (value > 0) {
    [value, idx] = euclideanDivision(value, 62)
    b62 = CHARSET[idx] + b62
  }
  /* eslint-enable no-loops/no-loops */
  return b62
}
