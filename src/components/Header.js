import logo from "../assets/logo.png";
import '../css/Header.css';

const Header = () => {
    return <div className="d-flex justify-spacebetween">
        <div className="netflix-logo">
            <img src={logo} alt="logo"></img> 
        </div>       
      <button className="signupbtn">Sign In</button>
    </div>
}

export default Header;