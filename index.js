
const books = [
    {
        id: 1,
        author: "J.K. Rowling",
        genre: "Fantasy",
        pages: 223,
        progress: 0,
        title: "Harry Potter and the Philosopher's Stone",
    }, 
    {
        id: 2,
        author: "Khaled Hosseini",
        genre: "Fiction",
        pages: 371,
        progress: 0,
        title: "The Kite Runner",
    }
]

// funtion to render books to the html page
const renderBooks = () => {

    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach((book) => (
        bookList.innerHTML += `
        <tr class="book">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td>${book.progress}%</td>
        </tr>`
    ))
}

const AddBook = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const genre = document.getElementById('genre').value
    const pages = document.getElementById('pages').value
    const progress = document.getElementById('progress').value

    const newBook  = {
        id: books.length + 1,
        title,
        author,
        genre,
        pages,
        progress,
    }

    books.push(newBook)
    renderBooks()
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('genre').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('progress').value = ''
}

const form = document.getElementById('add-book-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    AddBook()
})

renderBooks()
