const loadBooksButton = document.querySelector('.load-button');
const categoriesListContainer = document.querySelector('.categories-list');
const categoriesList = document.querySelectorAll('.categories-list li');
const booksContainer = document.querySelector('.books-container');
import star from '../assets/Star.svg';
import filledStar from '../assets/star-filled.svg';

let initialBookCount = 0;

let category = 'Architecture';
let isClicked = false;

export function handleLoadBooks() {
  loadBooksButton.onclick = () => {
    initialBookCount += 6;
    getBooks();
  }
}

export function handleBuyButton () {
  const buyNowButton = booksContainer.querySelectorAll('.buy-button');

  if (buyNowButton) {
    buyNowButton.forEach(button => {
      console.log(button)
      button.onclick = () => {
        !isClicked ? isClicked = true : isClicked = false;
      }
    })
  }
}

 export function getBooksFromList() {
  for (let listEl of categoriesList) {
    listEl.addEventListener('click', (e) => {
      categoriesListContainer.querySelector('.chosenCategory').classList.remove('chosenCategory');
      listEl.classList.add('chosenCategory');
      booksContainer.innerHTML = '';
      category = listEl.innerHTML;
      getBooks();
    })
  }
}

export function getBooks() {
  fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyDNqOURIAkd6F9DFzmyw2L688i7-_tIlSo&printType=books&startIndex=${initialBookCount}&maxResults=6&langRestrict=en`)
    .then(response => response.json())
    .then(data => {
        for (let book of data.items) {
            const bookItem = `
               <div class="book">
                <img src=${book.volumeInfo.imageLinks.thumbnail} alt="book-cover" class="book-cover"/>
                <div class="book_book-information">
                  <span class="author">${book.volumeInfo.authors}</span>
                  <h2 class="title">${book.volumeInfo.title}</h2>
                  <div class="ratings-wrapper">
                    <div class="rating">
                      <img src=${book.volumeInfo.averageRating > 0 ? filledStar : star}  alt="rating" width="12" height="12"/>
                      <img src=${book.volumeInfo.averageRating > 1 ? filledStar : star}  alt="rating" width="12" height="12"/>
                      <img src=${book.volumeInfo.averageRating > 2 ? filledStar : star}  alt="rating" width="12" height="12"/>
                      <img src=${book.volumeInfo.averageRating > 3 ? filledStar : star}  alt="rating" width="12" height="12"/>
                      <img src=${book.volumeInfo.averageRating > 4 ? filledStar : star}  alt="rating" width="12" height="12"/>
                    </div>
                    <span>${
                      book.volumeInfo.ratingsCount ? 
                      book.volumeInfo.ratingsCount + ` ${book.volumeInfo.ratingsCount === 1 ? 'review' : 'reviews'}` : 
                      'N/A'}
                    </span>
                  </div>
                  <p class="book-description">${book.volumeInfo.description || 'No description available'}</p>
                  <span class="price">${book.saleInfo.listPrice ? '$' + book.saleInfo.listPrice.amount : 'out of stock'}</span>
                  <button class="button buy-button">${!isClicked ? 'Buy now' : 'In the cart'}</button>
                </div>
              </div>
            `
          booksContainer.innerHTML += bookItem
        }
    }
    )
  handleLoadBooks();
}

