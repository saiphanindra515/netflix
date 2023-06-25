import { useState } from "react";
import Navbar from "../components/Navbar";
import '../css/Netflix.css';
import BackgroundImg from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Netflix = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        console.log('onscroll');
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll == null);
    }
    return <div className="netflix-container">
        <Navbar isScrolled={isScrolled} />
        <div className="hero">
            <img src={BackgroundImg} alt="backgroundimg" className="background-img" />
            <div className="backgroundimg-subcontainer">
                <div className="logo">
                    <img src={MovieLogo} alt="movielogo"/>
                </div>
                <div className="buttons flex">
                    <button className="flex j-center a-center faplay-btn">
                        <FaPlay /> Play
                    </button>
                    <button
                        className="flex j-center a-center moreinfo-btn"
                    >
                        <AiOutlineInfoCircle /> More Info
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Netflix;