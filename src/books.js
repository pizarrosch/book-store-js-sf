export function getBooks() {
  fetch('https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyDNqOURIAkd6F9DFzmyw2L688i7-_tIlSo&printType=books&startIndex=0&maxResults=6&langRestrict=en')
    .then(response => response.json())
    .then(data => {
      const loadedBooks = [];
        for (let key in data) {
          loadedBooks.push({
            id: data.items[i].id,
            author: data.items[i].volumeInfo.authors
          })
        }
      console.log(loadedBooks)
    })
}
