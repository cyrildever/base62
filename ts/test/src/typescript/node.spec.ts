import * as chai from 'chai'
chai.should()
import 'mocha'

const expect = chai.expect

import { decode, encode } from '../../../lib/src/typescript'

describe('Decoder', () => {
  describe('decode', () => {
    it('should recover the number appropriately', () => {
      const value = '4VX'
      const expected = 18969
      const found = decode(value)
      found.should.equal(expected)
    })
    it('should throw an error if the passed input is not a base-62 string', () => {
      expect(() => decode('not-a-base-62%')).to.throw(Error, 'not a base-62 input')
    })
  })
})
describe('Encoder', () => {
  describe('encode', () => {
    it('should transform an integer appropriately', () => {
      const value = 18969
      const expected = '4VX'
      const found = encode(value)
      found.should.equal(expected)
    })
    it('should throw an error if the passed number is not an integer', () => {
      expect(() => encode(24.75009)).to.throw(Error, 'not an integer')
    })
  })
})
