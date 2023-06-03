import('./index.scss');
import setSlider from "./slider.js";
import {getBooksFromList, getBooks, handleBuyButton} from './books.js'

setSlider();
getBooks();
getBooksFromList();
handleBuyButton();