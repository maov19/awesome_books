export default class Book {
  constructor() {
    this.books = [];
  }

  addBook(obj) {
    this.books = JSON.parse(localStorage.getItem('data'));
    if (this.books === null) {
      this.books = [];
      localStorage.setItem('data', this.books);
      this.books.push(obj);
      localStorage.setItem('data', JSON.stringify(this.books));
      document.querySelector('form').reset();
    } else {
      this.books.push(obj);
      localStorage.setItem('data', JSON.stringify(this.books));
      document.querySelector('form').reset();
    }
  }

  removeBook(id) {
    this.books = JSON.parse(localStorage.getItem('data'));
    this.books = this.books.filter((i) => i?.id !== id);
    localStorage.setItem('data', JSON.stringify(this.books));
    window.location.reload();
  }
}