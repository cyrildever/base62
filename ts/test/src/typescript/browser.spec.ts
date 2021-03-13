import { encode } from '../../../lib/src/typescript'

describe('Encoder', () => {
  describe('encode', () => {
    it('should transform an integer appropriately', () => {
      const value = 18969
      const expected = '4VX'
      const found = encode(value)
      found.should.equal(expected)
    })
  })
})
