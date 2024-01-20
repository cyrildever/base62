import { Base62, decode, encode } from '../../../lib/src/typescript'

const expect = chai.expect

describe('Base62', () => {
  it('should build the appropriate instance', () => {
    const b62 = new Base62('4VX')
    const expected = 18969
    const found = b62.value()
    found.should.equal(expected)
    b62.toString().should.equal('4VX')
    const bytes = Buffer.from([52, 86, 88])
    b62.toBuffer().should.eqls(bytes)
  })
  it('should not accept a wrong string', () => {
    const invalid = new Base62('not-a-base62-string')
    invalid.value().should.equal(-1)
    invalid.toString().should.equal('')
    invalid.toBuffer().should.eqls(Buffer.alloc(0))
  })
})
describe('Decoder', () => {
  describe('decode', () => {
    it('should recover the number appropriately', () => {
      let value = '4VX'
      let expected = 18969
      let found = decode(value)
      found.should.equal(expected)

      value = '0'
      expected = 0
      found = decode(value)
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
      let value = 18969
      let expected = '4VX'
      let found = encode(value)
      found.should.equal(expected)

      value = 0
      expected = '0'
      found = encode(0)
    })
    it('should throw an error if the passed number is not an integer', () => {
      expect(() => encode(24.75009)).to.throw(Error, 'not an integer')
    })
  })
})
