const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

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
