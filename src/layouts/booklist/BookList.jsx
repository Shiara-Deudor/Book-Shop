import React from 'react';
import './booklist.scss';
import BookCard from '@/components/bookcard/BookCard'


const BookList = ({ booksData }) => {
  return (
    <div className='book_list'>
      {booksData.map((book, index) => {
        return (
          <BookCard
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
          />
        );
      })}
    </div>
  );
};

export default BookList;
