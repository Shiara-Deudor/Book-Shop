import React from 'react'
import './bestselling.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BS1 from '@/assets/bestselling/bs1.jpg'
import BS2 from '@/assets/bestselling/bs2.jpg'
import BS3 from '@/assets/bestselling/bs3.jpg'
import BS4 from '@/assets/bestselling/bs4.jpg'
import BS5 from '@/assets/bestselling/bs5.jpg'
import BS6 from '@/assets/bestselling/bs6.jpg'
import BS7 from '@/assets/bestselling/bs7.jpg'
import BS8 from '@/assets/bestselling/bs8.jpg'
import BS9 from '@/assets/bestselling/bs9.jpg'
import BS10 from '@/assets/bestselling/bs10.jpg'


const data = [
    {
        title: 'The Little Prince',
        img: BS1,
        description: 'The apparently naive drawings that illustrate the book and its cover are so powerful that they help you visualize the story and become a part of it.'
    },
    {
        title: 'Everything Is Illuminated',
        img: BS2,
        description: 'One of the most iconic book covers out there belongs to Jonathan Safran Foer’s Everything Is Illuminated novel.'
    },
    {
        title: 'Harry Potter series',
        img: BS3,
        description: 'Your imagination takes off while reading fantasy books, and you can’t stop picturing the characters and scenes.'
    },
    {
        title: 'The Great Gatsby',
        img: BS4,
        description: 'One of the best book designs of all time, and it was a one-hit-wonder since it was the only book cover he ever designed.'
    },
    {
        title: 'The Hobbit',
        img: BS5,
        description: 'The Hobbit is a fascinating fantasy book that inspired many generations, and there are more than one beautiful cover designs out there.'
    },
    {
        title: 'The Seven Husbands of Evelyn Hugo',
        img: BS6,
        description: 'A movie icon recounts stories of her loves and career to a struggling magazine writer.'
    },
    {
        title: 'Atomic Habits',
        img: BS7,
        description: 'Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones.'
    },
    {
        title: 'Twisted Love',
        img: BS8,
        description: 'The first book in the Twisted series. Secrets emerge when Ava explores things with her brother’s best friend.'
    },
    {
        title: 'The Hunger Games',
        img: BS9,
        description: 'In a dystopia, a girl fights for survival on live TV.'
    },
    {
        title: 'Diary of a Wimpy Kid',
        img: BS10,
        description: 'The travails and challenges of adolescence.'
    },
]

const Bestselling = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
  return (
    <section className='bestselling'>
        <h2>Bestselling Books</h2>
        <div className='bestselling-container'>
            <div classname='bestselling-card'>
                <Slider {...settings}>
                {data.map((d) => (
                    <div className="card-container">
                        <div className="bestselling-img-container">
                            <img src={d.img} className='bestselling-img'/>
                        </div>
                        <div className='bestselling-content'>
                            <p className='bestselling-title'>{d.title}</p>
                            <p className='bestselling-descrip'>{d.description}</p>
                            <button className='bestselling-btn'>Read More</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Bestselling
