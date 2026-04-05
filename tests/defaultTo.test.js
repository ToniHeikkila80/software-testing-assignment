import defaultTo from '../src/defaultTo.js'

test('returns value when it is not null', () => {
  expect(defaultTo(5, 10)).toBe(5)
})

test('returns default when value is null', () => {
  expect(defaultTo(null, 10)).toBe(10)
})

test('returns default when value is undefined', () => {
  expect(defaultTo(undefined, 10)).toBe(10)
})