test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

const array = [1, 2, 10, 1000];
it('array has 1000 on it', () => {
  expect(array).toContain(1000);
});

const array = [1, 2, 10, 1000];
it('array has 10 on it', () => {
  expect(array).toContain(10);
});

const array = [1, 2, 10, 1000];
it('array has 1 on it', () => {
  expect(array).toContain(1);
});


const array = [1, 2, 10, 1000];
it('array has 2 on it', () => {
  expect(array).toContain(2);
});

const array = [1, 2, 10, 1000];
it('array has 2 on it', () => {
  expect(array).toContain(2);
});
