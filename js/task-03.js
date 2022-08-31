// Напиши скрипт для створення галереї зображень на підставі масиву даних.
// HTML містить список ul.gallery.

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Варіант 1
const createGallery = array => {
  return array.map(image => {
    const item = document.createElement('li');
    item.style.listStyle = 'none';

    const imgRef =  document.createElement('img');
    imgRef.src=`${image.url}`;
    imgRef.alt=`${image.alt}`;
    imgRef.width = 320;
    item.append(imgRef);

    return item;
  })
}

const newElement = createGallery(images);

const gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';

gallery.append(...newElement);


// Варіант 2
const galleryEl = document.querySelector('.gallery');

const makeGalleryList = items => {
  return items.map(item => {
    const galleryItem = document.createElement('li');
    galleryItem.style.listStyle = 'none';

    galleryItem.insertAdjacentHTML('beforeend', `<img src=${item.url} alt=${item.alt} width="320">`);

    return galleryItem;
  });
};

const elements = makeGalleryList(images);

galleryEl.append(...elements);
