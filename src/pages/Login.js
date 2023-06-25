import Background from "../components/Background";
import Header from "../components/Header";
import '../css/Login.css';
import InputCustomComp from "../custom/InputCustomComp";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    return <div className="root-container">
        <Background />
        <div className="content">
            <Header />
            <div className="login-body">
                <h1 className="t-w main-heading">Unlimited Movies, TV shows and more</h1>
                <h3 className="t-w sub-heading">watch anywhere, cancel anytime</h3>
                <h3 className="t-w sub-heading">Ready to watch? Enter your email to create or restart your membership.</h3>
                <form className="sign-in-form">
                  <InputCustomComp label="Email Address" onChangeFun = {(e) => {console.log(e.target.value);}} />
                    <button onClick={() => navigate('/signup')} className="getstarted-btn">Get Started  &gt;</button>
                </form>
            </div>
        </div>
    </div>
}

export default Login;