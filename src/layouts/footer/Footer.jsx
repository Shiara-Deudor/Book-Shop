import React from 'react'
import './footer.scss'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer-feat'>
        <div className='footer-container'>
            <h3>BIBLIOPHILE</h3>
            <p>Bibliophone is a bookshop website where you will find different books of your choice.
            You can be updated of the featured and bestselling books, as well as finding new books
            to read. But one thing is for sure, each book is unique in its own way. Happy Reading!
            </p>
            <div className='footer-icons'>
                <ul>
                    <li className='icon'> <FaFacebook /> </li>
                    <li className='icon'> <FaTwitter /> </li>
                    <li className='icon'> <FaInstagram /> </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
