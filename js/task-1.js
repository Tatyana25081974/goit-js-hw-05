
function isEnoughCapacity(products, containerSize) {
  // Ініціалізуємо змінну для загальної кількості товарів
  let totalItems = 0;

  // Проходимо по всіх властивостях об'єкта products
  for (let product in products) {
    totalItems += products[product];  // Додаємо кількість товарів до загальної суми
  }

  // Порівнюємо загальну кількість товарів з контейнером
  return totalItems <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false


