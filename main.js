/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { DateTime } from './modules/luxon.js';
import Book from './modules/Book.js';

const booksList = document.getElementById('booksList');
const newBook = document.getElementById('newBook');
const contactInfo = document.getElementById('contactInfo');
const recordSec = document.querySelector('.record-section');
const addForm = document.querySelector('.form');
const contactSec = document.querySelector('.contact');
const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');
const currentDate = DateTime.local();

const newDate = currentDate.toLocaleString({
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});
const newTime = currentDate.toLocaleString(DateTime.TIME_WITH_SECONDS).toLowerCase();

const bookc = new Book();

document.getElementById('current-date').innerHTML = `${newDate}, ${newTime}`;

booksList.addEventListener('click', () => {
  window.location.reload();
  recordSec.style.display = 'block';
  addForm.style.display = 'none';
  contactSec.style.display = 'none';
});

newBook.addEventListener('click', () => {
  recordSec.style.display = 'none';
  addForm.style.display = 'block';
  contactSec.style.display = 'none';
});

contactInfo.addEventListener('click', () => {
  recordSec.style.display = 'none';
  addForm.style.display = 'none';
  contactSec.style.display = 'block';
});

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
});

window.remove = (id) => {
  bookc.removeBook(id);
};

// Local storage

window.addEventListener('DOMContentLoaded', () => {
  recordSec.style.display = 'block';
  addForm.style.display = 'none';
  contactSec.style.display = 'none';
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