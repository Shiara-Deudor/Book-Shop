import React from 'react'
import './header.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><a href=""><GiHamburgerMenu className='header-icon'/></a></li>
            </ul>
            <ul>
                <li><ImBooks className='header-icon'/> <a href="#" className='logo'>bibliophile</a></li>
            </ul>
            <form class="form">
                <button>
                    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <input class="input" placeholder="Search" required="" type="text"></input>
            </form>
            <ul>
                <li><a href="#"><CiShoppingCart className='header-icon'/></a></li>
                <li><a href="#"><CiHeart className='header-icon'/></a></li>
                <li><a href="#"><CiUser className='header-icon'/></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
