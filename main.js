/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import Book from './modules/Book.js';

const addForm = document.querySelector('.form');
const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');

const bookc = new Book();


btn.addEventListener('click', () => {
  if (Title.value === '' || Author.value === '') {
    document.querySelector('.form > span').textContent = 'All fields are required!';
  } else {
    const bookObj = {
      id: new Date().getUTCMilliseconds(),
      title: Title.value,
      author: Author.value,
    };
    bookc.addBook(bookObj);
  }
  window.location.reload();
});


window.remove = (id) => {
  bookc.removeBook(id);
};

// Local storage
window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('data')) === null ? [] : JSON.parse(localStorage.getItem('data'));
  books.forEach((i) => {
    showBooks.innerHTML += `
      <div class="element">
      <h5>${i?.title} by ${i?.author} </h5>
      <button type='button' onClick='remove(${i?.id})'>Remove</button>
      </div>
      `;
  });
});