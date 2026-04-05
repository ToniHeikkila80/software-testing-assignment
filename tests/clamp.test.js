import clamp from '../src/clamp.js'

test('number inside range stays same', () => {
  expect(clamp(5, 10, 1)).toBe(5)
})

test('number below range becomes lower bound', () => {
  expect(clamp(-5, 10, 1)).toBe(1)
})

test('number above range becomes upper bound', () => {
  expect(clamp(20, 10, 1)).toBe(10)
})