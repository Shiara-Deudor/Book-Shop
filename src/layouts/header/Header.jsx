import { useState, React } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import './header.scss';



const Header = () => {
    const navigate = useNavigate();
    const navigateTo = (link) => () => {
        navigate(link);
    }
  return (
    <header>
        <nav>
            <ul>
                <li><a href="#"><GiHamburgerMenu className='header-icon'/></a></li>
            </ul>
            <ul>
                <li><ImBooks className='header-icon logo-icon'/> <a href="#" className='logo' onClick={navigateTo('/home')}>bibliophile</a></li>
            </ul>
            <form className="form">
                <button>
                    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <input className="input" placeholder="Search" required="" type="text"></input>
            </form>
            <ul>
                <li><a href="#" onClick={navigateTo('/shop')}><LiaBookSolid className='header-icon shop'/></a></li>
                <li><a href="#" onClick={navigateTo('/cart')}><CiShoppingCart className='header-icon cart'/></a></li>
                <li><a href="#" onClick={navigateTo('/likes')}><CiHeart className='header-icon heart'/></a></li>
                <li><a href="#" onClick={navigateTo('/profile')}><CiUser className='header-icon user'/></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
