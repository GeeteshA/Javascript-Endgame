//Classes in Js are addead in ES6 and they are blueprint for creating Objects,they bind data and methods in a single structure.
// Class contains
// -> A Constructor method: initialize object properties
// -> Methodsl: Function that define behaviour of the class 

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        console.log('Books in Library:');
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getDetails()}`);
        });
    }
}


const book1 = new Book('Attack of Titan', 'Hajiyama');
const book2 = new Book('Solo leveling', 'Jinwoo');

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.listBooks();
