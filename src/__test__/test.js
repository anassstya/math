import {Math1, Deamom, Magician} from '../index'; 

test.each([
  [100, 2, 90],
  [100, 1, 100],
  [100, 4, 70],
  [1000, 13, undefined]
])('test players', (value, field, result) => {
  let b =  new Math1();
  b.set(value);
  expect(b.get(field)).toBe(result);
});

test.each([
  [100, 2, 90],
  [100, 1, 100]
])('test Deamon', (value, field, result) => {
  let b =  new Deamom();
  b.set(value);
  expect(b.get(field)).toBe(result)
});

test.each([
  [100, 2, 90],
  [100, 1, 100]
])('test Magician', (value, field, result) => {
  let b =  new Magician();
  b.set(value);
  expect(b.get(field)).toBe(result)
});

test.each([
  [1000, 2, 895],
  [100, 5, 48],
  [100, 1, 100]
])('test players', (value, field, result) => {
  let b =  new Math1();
  b.set(value);
  expect(b.durman(field)).toBe(result);
});