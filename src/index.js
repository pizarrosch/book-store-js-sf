import('./index.scss');
import setSlider from "./slider.js";
import {getBooksFromList, getBooks} from './books.js';

const pageTitle = document.querySelector('.header_content-wrapper h2');

pageTitle.addEventListener('click', () => {
  location.reload();
})

setSlider();
getBooks();
getBooksFromList();

