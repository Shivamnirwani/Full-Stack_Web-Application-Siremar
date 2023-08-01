
import './login.scss';

function Login(){
    return(
        <div id="login">
            <h1>Login/Register</h1>

            <div class="line"></div>
            <div class="Login">
                <label> <b>Username</b></label>
                <input type="text" name="Uname" id="Uname" placeholder="Enter your Username"/>
                <br/><br/>
                <label> <b>Password</b> <br/></label>
                <input type="text" name="Pass" id="Pass" placeholder="Enter your password" />
                <br/><br/>
                <input type="submit" name="Submit" id ="Submit" value = "Submit"/>
                <br/><br/>
                <label> <o><b> Don't have an account...</b></o></label><br/> 
                <a href='/register'><input type="button"  name="Register" id ="Register" value = "Register"/></a>
            </div>
        </div>
    )
}

export default Login