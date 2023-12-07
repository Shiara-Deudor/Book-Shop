import React, { useState, useEffect } from 'react';
import './shop.scss';
import axios from 'axios';
import BookList from '../../layouts/booklist/BookList';

const Shop = () => {
  const [booksData, setBooksData] = useState([]);
  const [page, setPage] = useState([1]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=the&filter=free-ebooks&printType=books&key="
      );
        setBooksData((prev) => [...prev, ...response.data.items]);
        setLoading(false)
      }
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
        window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight
    ) {
      setLoading(true)
      setPage(prev => prev+1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <section className='books'>
      <div className='books_items'>
        <h1>SHOP NOW</h1>
        <BookList booksData={booksData} className="books_data"/>
      </div>
    </section>   
  );
};

export default Shop;
