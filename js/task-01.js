const categoriesList = document.querySelector("#categories");

const categoryItems = document.querySelectorAll('li.item');


console.log('Кількість категорій:', categoryItems.length);

categoryItems.forEach((item) => {
    const categotyTitle = item.querySelector('h2').textContent;

    const categoryItemsCount = item.querySelectorAll('li').length

console.log('Загловок:', categotyTitle);
console.log('Кількість елементів:', categoryItemsCount);

});

