// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


// Варіант 1
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const items = document.createElement('li');
  items.textContent=`${ingredient}`;
  items.classList.add('item');

  listRef.append(items);
})

// Варіант 2
const ingredientsListEl = document.querySelector('#ingredients');
console.log(ingredientsListEl);

const makeIngredientsList = ingredientsArray => {
  return ingredientsArray.map(ingredient => {
    const ingredientItemEL = document.createElement('li');
    ingredientItemEL.textContent = ingredient;
    ingredientItemEL.classList.add('item');

    return ingredientItemEL;
  });
};

const elements = makeIngredientsList(ingredients);

ingredientsListEl.append(...elements);

console.log(ingredientsListEl);