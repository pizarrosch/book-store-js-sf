const categoriesListContainer = document.querySelector('.categories-list');
const categoriesList = document.querySelectorAll('.categories-list li');
const booksContainer = document.querySelector('.books-container');
import star from '../assets/Star.svg';
import filledStar from '../assets/star-filled.svg';
import noCoverBook from '../assets/no-cover.jpg';

let initialBookCount = 0;

let category = 'Architecture';
let isClicked = false;
let addedItemsArray = [];
let itemNumber = 0;

export function getBooksFromList() {
  for (let listEl of categoriesList) {
    listEl.addEventListener('click', (e) => {
      categoriesListContainer.querySelector('.chosenCategory').classList.remove('chosenCategory');
      listEl.classList.add('chosenCategory');
      booksContainer.innerHTML = '';
      category = listEl.innerHTML;
      getBooks();
      localStorage.getItem('addStatus');
    })
  }
}

export function getBooks() {
  itemNumber++;
  const storedItem = localStorage.getItem('addedBookID');
  const parsedItem = JSON.parse(storedItem);

  fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyDNqOURIAkd6F9DFzmyw2L688i7-_tIlSo&printType=books&startIndex=${initialBookCount}&maxResults=6&langRestrict=en`)
    .then(response => response.json())
    .then(data => {
        for (let book of data.items) {
          const bookItem = `
               <div class="book" data-index=${book.id}>
                <img src=${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noCoverBook} alt="book-cover" class="book-cover"/>
                <div class="book_book-information" >
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
                  <button class="button buy-button">Buy now</button>
                </div>
              </div>
            `
          booksContainer.innerHTML += bookItem
        }
        const loadButton = document.createElement('button');
        loadButton.classList.add('button', 'load-button');
        loadButton.innerHTML = 'Load more';
        booksContainer.append(loadButton);

        loadButton.onclick = () => {
          initialBookCount += 6;
          getBooks();
          loadButton.classList.add('hidden')
        };

        const buyButtons = document.querySelectorAll('.buy-button');
        const itemsCounter = document.querySelector('.itemsNumber');

        for (let addButton of buyButtons) {

          const parentIndex = addButton.closest('.book').dataset.index;

          addButton.onclick = (e) => {
            if (addButton.innerHTML === 'Buy now') {
              addButton.innerHTML = 'In the cart'
              addedItemsArray.push(parentIndex);
              console.log(addedItemsArray)
            } else if (addButton.innerHTML === 'In the cart') {
              addButton.innerHTML = 'Buy now'
              const storedItem = localStorage.getItem('addedBookID');
              const parsedItem = JSON.parse(storedItem);
              addedItemsArray = parsedItem.filter(item => item !== e.currentTarget.closest('.book').dataset.index);
              console.log(addedItemsArray)
            }

            itemsCounter.style.display = 'block';
            itemsCounter.innerHTML = `${addedItemsArray.length}`;

            if (addedItemsArray.length === 0) {
              itemsCounter.style.display = 'none';
            }

            const stringArr = JSON.stringify(addedItemsArray);
            localStorage.setItem('addedBookID', stringArr);
          }

          for (itemNumber = 0; itemNumber < parsedItem.length; itemNumber++) {
            if (parentIndex === parsedItem[itemNumber]) {
              addButton.innerHTML = 'In the cart';
              addedItemsArray = parsedItem;
              itemsCounter.style.display = 'block';
              itemsCounter.innerHTML = `${addedItemsArray.length}`;
            }
          }
        }
      }
    )
}






