test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

const array = [1, 2, 10, 1000];
it('array has 1000 on it', () => {
  expect(array).toContain(1000);
});