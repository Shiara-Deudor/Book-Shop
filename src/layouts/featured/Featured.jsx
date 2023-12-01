import { useState, useEffect } from 'react'
import './featured.scss';
import IMG1 from "@/assets/featured-img1.jpg";
import IMG2 from "@/assets/featured-img2.png";
import IMG3 from "@/assets/featured-img3.jpg";
import IMG4 from "@/assets/featured-img4.jpg";
import IMG5 from "@/assets/featured-img5.png";
import IMG6 from "@/assets/featured-img6.jpg";
import IMG7 from "@/assets/featured-img7.jpg";

const Featured = () => {
    
    const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentImage]);

  return (
    <section className='featured'>
        <div className='featured-content'>    
            <h4>BIBLIOPHILE'S</h4>
            <h2>Featured Books of the</h2>
            <h1>DECEMBER</h1>
            <div>
                <button className='featured-btn'>
                    See More
                </button>
            </div> 
        </div>
        <div className='featured-img'>
            <img src={images[currentImage]} alt={`Featured Image ${currentImage + 1}`} />
        </div>
    </section>
  )
}

export default Featured
