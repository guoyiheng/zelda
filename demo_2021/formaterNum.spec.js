const { numFormat, formatNumber } = require('./formaterNum.js')

const num = 1234.5
const num2 = 12345.6
const num3 = 1234
const num4 = 1191.71

describe('数字➕千分位符', () => {
  it('1234.5应该为1,234.5', () => {
    expect(numFormat(num)).toBe('1,234.5')
  })
  it('12345.6应该为12,345.6', () => {
    expect(numFormat(num2)).toBe('12,345.6')
  })
  it('1234 应该为 1,234', () => {
    expect(numFormat(num3)).toBe('1,234')
  })
  it('1191.71 应该为 1,191.71', () => {
    expect(numFormat(num4)).toBe('1,191.71')
  })
})
describe('数字➕千分位符2', () => {
  it('1234.5应该为1,234.5', () => {
    expect(formatNumber(num)).toBe('1,234.5')
  })
  it('12345.6应该为12,345.6', () => {
    expect(formatNumber(num2)).toBe('12,345.6')
  })
  it('1234 应该为 1,234', () => {
    expect(formatNumber(num3)).toBe('1,234')
  })
  it('1191.71 应该为 1,191.71', () => {
    expect(formatNumber(num4)).toBe('1,191.71')
  })
})
