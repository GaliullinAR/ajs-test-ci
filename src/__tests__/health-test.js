import healthFunc from '../health';

test.each([
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
])('Тестировние корректного отображения здоровья', (fn, expected) => {
  const result = healthFunc(fn);
  expect(result).toBe(expected);
});
