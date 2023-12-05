import React, { useEffect } from 'react';
import './authors.scss'
import ScrollCarousel from 'scroll-carousel';
import AUTHOR1 from '@/assets/authors/author1.jpg'
import AUTHOR2 from '@/assets/authors/author2.jpg'
import AUTHOR3 from '@/assets/authors/author3.jpg'
import AUTHOR4 from '@/assets/authors/author4.jpg'
import AUTHOR5 from '@/assets/authors/author5.jpg'
import AUTHOR6 from '@/assets/authors/author6.jpg'
import AUTHOR7 from '@/assets/authors/author7.jpg'
import AUTHOR8 from '@/assets/authors/author8.jpg'

const Authors = () => {

    useEffect(() => {
        new ScrollCarousel('.authors', {
            slideSelector: '.author',
            autoplay: true,
            interval: 2000,
        });
      }, []);
      
  return (
    <section className='favorite-authors'>
        <div>
            <h1>Favorite Authors</h1>
            <h3>"Either write something worth reading or do something worth writing."</h3>
            <p>Benjamin Franklin</p>
        </div>
        <div class="authors">
            <div class="author">
                <img src={AUTHOR1} />
                <h5>J.K Rowling</h5>
            </div>
            <div class="author">
                <img src={AUTHOR2} />
                <h5>Stephen King</h5>
            </div>
            <div class="author">
                <img src={AUTHOR3} />
                <h5>Nicholas Sparks</h5>
            </div>
            <div class="author">
                <img src={AUTHOR4} />
                <h5>James Patterson</h5>
            </div>
            <div class="author">
                <img src={AUTHOR5} />
                <h5>Paulo Coelho</h5>
            </div>
            <div class="author">
                <img src={AUTHOR6} />
                <h5>Dan Brown</h5>
            </div>
            <div class="author">
                <img src={AUTHOR7} />
                <h5>Stephenie Meyer</h5>
            </div>
            <div class="author">
                <img src={AUTHOR8} />
                <h5>Irving Wallace</h5>
            </div>
        </div>
    </section>
  )
}

export default Authors
