import React from 'react';
import './bookcard.scss';

const BookCard = ({ image, title, authors }) => {
  return (
    <div className='book_card'>
      <img src={image} alt={title} />
      <div className='book_info'>
        <h3>{title}</h3>
        <p>By: {authors ? authors.join(', ') : 'Unknown'}</p>
      </div>
    </div>
  );
};

export default BookCard;
