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
