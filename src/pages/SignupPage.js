import Background from "../components/Background";
import Header from "../components/Header";
import "../css/SignupPage.css"
import InputBoxCustom from '../custom/InputCustomComp';

const SignupPage = () => {
    return <div className="root-container">
        <Background />
        <div className="content">
            <Header />

            <div className="signin-root-container">
                <div className="signin-form-container">
                    <h1 className="signin-text">Sign in</h1>
                    <InputBoxCustom label="Email or phone number" onChangeFun = {(e) => console.log(e)}></InputBoxCustom>
                    <InputBoxCustom label="Password" onChangeFun = {(e) => console.log(e)}></InputBoxCustom>
                    <button className="signin-btn">Sign In</button>
                    <div className="remember-section">
                       <div>
                        <input type="checkbox" id="rememberme"></input>
                        <label for="rememberme">Remember me</label>
                        </div> 
                        <p>Need help?</p>
                    </div>
                    <div className="new-to-netflix">
                       <p> New to Netflix?  <span className="signup-now">Sign up now</span> </p>
                    </div>
                    <div className="sampletext">
                        This page is protected by Google reCAPTCHA to
                        <br></br> 
                           ensure you're not a bot. Learn more. <span className="learnnow">Learn now</span>
                    </div>
                </div> 
            </div>   
        </div>
    </div>
}

export default SignupPage;