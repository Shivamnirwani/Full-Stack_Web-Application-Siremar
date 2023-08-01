
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import './login.scss';
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uname: "",
            pass: "",
            data: [],
        };
    }

    onSubmit(event) {
        event.preventDefault();
        this.onSubmit = this.onSubmit.bind(this);
        console.log("request " + this.state);
        axios({
            method: 'post',
             url: "https://abcd.cloud/php/login.php",
             //url:"http://localhost/Phase-2/php/login.php",
            headers: {
                'content-type': 'application/json'
            },
            data: this.state
        })
            .then(result => {
                console.log(result);
                this.setState({
                    dataSent: result.data.sent,
                })
                console.log(this.state);
                if(result.data.user){
                    window.location = "/admin";
                }else{
                    alert(result.data.message);
                }
            })
            .catch(error => this.setState({
                error: error.message
            }));
    }
   
    render() {
        return (
            <div id="login">
                <h1>Login/Register</h1>

                <div class="line"></div>
                <div class="Login">
                    <form>
                        <label> <b>Username</b></label>
                        <input type="text" name="uname" id="Uname" value={this.state.uname}
                            onChange={(e) =>
                                this.setState({ uname: e.target.value })
                            } placeholder="Enter your Username" />
                        <br /><br />
                        <label> <b>Password</b> <br /></label>
                        <input type="password" name="pass" id="Pass" value={this.state.pass}
                            onChange={(e) =>
                                this.setState({ pass: e.target.value })
                            } placeholder="Enter your password" />
                        <br /><br />
                        <input type="submit" name="Submit" id="Submit" value="Submit" onClick={(e) => this.onSubmit(e)} />
                    </form>
                    <br /><br />
                    <label> <o><b> Don't have an account...</b></o></label><br />
                    <a href='/register'><input type="button" name="Register" id="Register"  value="Register" /></a>
                </div>
            </div>
        );
    }
}
export default Login