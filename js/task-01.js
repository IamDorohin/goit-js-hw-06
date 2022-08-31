// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль
// текст заголовку елемента (тегу <h2>) і кількість елементів в категорії
// (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// Варіант 1
const categoriesEl = document.querySelectorAll('#categories > li.item');
const categoriesCounter = categoriesEl.length;
console.log(`Number of categories: ${categoriesCounter}`);

categoriesEl.forEach(category => {
    const categoryTitle = category.firstElementChild;    
    const categoryName = categoryTitle.textContent;
    console.log(`Category: ${categoryName}`);
    
    const categoryList = category.lastElementChild;
    const categoryListItemsCount = categoryList.children.length;
    console.log(`Elements: ${categoryListItemsCount}`);


});


// Варіант 2 (коротший)
const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});