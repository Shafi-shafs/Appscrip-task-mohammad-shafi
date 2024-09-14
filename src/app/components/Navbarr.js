"use client";
import Link from 'next/link';
import '../css/nav.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);  // Initial cart count is 2
  const [searchOpen, setSearchOpen] = useState(false); // Track search bar visibility

  return (
    <>
      <header>
        {/* Top Navigation Bar */}
        <nav className="top-nav">
          <div className="left-side">
            <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
            <img src="https://th.bing.com/th/id/OIP.1oAzWhiL5yyiWExEgzjxJQAAAA?rs=1&pid=ImgDetMain" alt="Logo" className="logo" />
            <span className="brand-text">LOGO</span>
          </div>
          <div className="right-side">
            <CiSearch className="icon" onClick={() => setSearchOpen(!searchOpen)} /> {/* Toggle search bar */}
            <CiHeart className="icon" />
            <div className="cart-container">
              <HiOutlineShoppingBag className="icon" /> 
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
            <HiOutlineUser className="icon" />
            <select className="language-select">
              <option value="en">ENG</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>
          </div>
        </nav>

        {/* Search Bar */}
        {searchOpen && (
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        )}

        {/* Bottom Navigation Bar */}
        <nav className={`bottom-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="/shop">SHOP</Link></li>
            <li><Link href="/skills">SKILLS</Link></li>
            <li><Link href="/stories">STORIES</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact-us">CONTACT US</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
