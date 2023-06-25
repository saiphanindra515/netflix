import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import '../css/Navbar.css';
import { useState } from "react";
import { FaPowerOff, FaSearch } from "react-icons/fa";

const Navbar = ({isScrolled}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);
    const links = [
        {name: 'Home', link: '/'},
        {name: 'TV Shows', link: '/tvshows'},
        {name: 'Movies', link: '/movies'},
        {name: 'My List', link: '/mylist'}
    ]
    return <div className="container">
        <nav className={`flex ${isScrolled ? 'scroll' : ''}`}>
            <div className="left d-flex a-center">
                <div className="brand d-flex a-center j-center">
                    <img src={logo} className="logo-brand"></img>
                </div>
                <ul className="links d-flex">
                    {
                        links.map(({name, link}) => {
                            return <li key={name}> <Link to={link}>{name}</Link> </li>
                        })
                    }
                </ul>
            </div>
            <div className="right d-flex a-center">
                <div className={`search ${showSearch ? 'show-search' : ''}`}>
                    <button onFocus={() => setShowSearch(true)} 
                    onBlur={() => { if(!inputHover) setShowSearch(false) }}> 
                    <FaSearch /> 
                    </button>
                    <input type="text" placeholder="Search"
                        onMouseEnter={() => setInputHover(true)}
                        onMouseLeave={() => setInputHover(false)}
                        onBlur={() => {
                            setInputHover(false);
                            setShowSearch(false);
                        }}
                    />
                </div>
                <button>
                        <FaPowerOff />
                    </button>
            </div>
        </nav>
    </div>
}

export default Navbar;