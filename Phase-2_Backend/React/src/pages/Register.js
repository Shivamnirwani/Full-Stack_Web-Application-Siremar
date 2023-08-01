import './Register.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Register() {

    let [account, setAccount] = useState({
        role: '',
        siremar_id: '',
        fname: '',
        lname: '',
        email: '',
        residential_id: '',
        location: '',
        password: '',
        confirm_password: '',
        uname: ''
    });


    const navigate = useNavigate();
    const [user, updateUser] = useState('Super_Admin')
    const toggleMenu = (type) => {
        let emp = document.getElementsByClassName('reg-emp')[0]
        let res = document.getElementsByClassName('reg-res')[0]

        if (type == 'res') {
            emp.style.display = 'none'
            res.style.display = 'block'

        } else {
            emp.style.display = 'block'
            res.style.display = 'none'
        }
    }
    const check_pass = () => {
        if (document.getElementById('pass').value == document.getElementById('cpass').value) {
            document.getElementById('submit').disabled = false;
            document.getElementById('message').innerHTML = " ";
        } else {
            document.getElementById('message').innerHTML = "Passwords do not match";
            document.getElementById('submit').disabled = true;

        }
    }

    function selectUser(e) {
        e.preventDefault()
        if (user == "Super_Admin") {
            navigate('/admin')
        } else {
            navigate('/inspector')
        }
    }

    let save = async (e) => {
        e.preventDefault();
        // this.onubmit = this.onSubmit.bind(this);
        console.log("request " + account.confirm_password);


        const regFormData = {
            role: account.role,
            siremar_id: account.siremar_id,
            fname: account.fname,
            lname: account.lname,
            email: account.email,
            residential_id: account.residential_id,
            location: account.location,
            password: account.password,
            confirm_password: account.confirm_password,
            uname: account.uname
        }

        // console.log(regFormData);
        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: "https://abcd/register.php",
                data: regFormData,
                //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
                headers: {
                    'Content-Type': 'application/json'
                },
                // headers: { "Content-Type": "multipart/form-data" },
            }).then(response => {
                if (response){
                    alert("User Registered Successfully!!!");
                    window.location = "/login";
                }
            });
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        });
    }

    function changeUser(e) {
        updateUser(e.target.value)
    }

    return (
        <div className="">
            <h1>Registration Page</h1>
            <div className="line">
            </div>
            <div className="Register">
                <div className="toggle-menu">
                    <input type="button" name="butt1" id="resbut" value="Residents" onClick={() => toggleMenu('res')} />
                    <input type="button" name="butt2" id="sirempbut" value="Siremar" onClick={() => toggleMenu('emp')} />
                </div>

                <form className="reg-emp d-none" id="Register" method="get" onSubmit={save}>



                    <label> <b>Role</b></label><br />
                    <select name="role" id="Role" /*onChange={(e) => changeUser(e)}*/ onChange={handleChange}>
                        <option value="">select a role</option>
                        <option value="admin">Admin</option>
                        <option value="inspector">Inspector</option>
                        <option value="employee">Employee</option>

                    </select>

                    <label> <b>Siremar ID</b></label><br />
                    <input type="text" name="siremar_id" value={account.siremar_id}
                        onChange={handleChange} id="SEmpid" placeholder="Enter your Siremar ID" />

                    <label> <b>First Name</b></label>
                    <input type="text" name="fname" value={account.fname}
                        onChange={handleChange} id="Fullname" placeholder="Enter your First Name" />

                    <label> <b>Last Name</b></label>
                    <input type="text" name="lname" value={account.lname}
                        onChange={handleChange} id="Fullname" placeholder="Enter your Last Name" />

                    <label> <b>Email</b></label><br />
                    <input type="text" name="email" value={account.email}
                        onChange={handleChange} id="Email" placeholder="Enter your Email" />

                    <label> <b>Residential ID</b></label><br />
                    <input type="text" name="residential_id" id="Resid" value={account.residential_id}
                        onChange={handleChange} placeholder="Enter your Residential ID" />

                    <label> <b>Location</b></label><br />
                    <input type="text" name="location" id="Location" value={account.location}
                        onChange={handleChange} placeholder="Enter your current location" />

                    <label><b>Password</b></label><br />
                    <input type="password" name="password" id="pass" value={account.password}
                        onChange={handleChange} placeholder="Enter your Password" /*onChange={() => check_pass()}*/ />

                    <label><b>Confirm_Password</b></label><br />
                    <input type="password" name="confirm_password" id="cpass" value={account.confirm_password}
                        onChange={handleChange} placeholder="Re-enter your Password" /*onChange={() => check_pass()}*/ />
                    <p><span id='message'></span></p>

                    <label> <b>Username</b></label><br />
                    <input type="text" name="uname" id="Uname" value={account.uname}
                        onChange={handleChange} placeholder="Enter your Username" />

                    <input type="submit" /*onClick={(e) => selectUser(e)}*/ name="submit" value="Submit" id="submit" />

                </form>


                <form className="reg-res" id="Register-2" method="get">

                    <label> <b>First Name</b></label><br />
                    <input type="text" name="fname" id="Fname" placeholder="Enter your First Name" />

                    <label> <b>Last Name</b></label><br />
                    <input type="text" name="lname" id="Lname" placeholder="Enter your Last Name" />


                    <label> <b>Date of Birth</b></label><br />
                    <input type="date" name="dob" id="DOB" />

                    <label> <b>Age</b></label><br />
                    <input type="text" name="age" id="Age" placeholder="Enter your Age" />

                    <label> <b>Address</b></label><br />
                    <input type="text" name="location" id="Address" placeholder="Enter your Location" />

                    <label> <b>Phone Number</b></label><br />
                    <input type="text" name="pno" id="Pno" placeholder="Enter your 10 digit Phone Number" />

                    <label> <b>Time on Island</b></label><br />
                    <input type="text" name="toi" id="Toi" placeholder="Enter the time spent on island" />

                    <label> <b>Email</b></label><br />
                    <input type="text" name="email" id="Email" placeholder="Enter your Complete Email" />

                    <label> <b>Occupation</b></label><br />
                    <input type="text" name="occup" id="Occup" placeholder="Enter your Occupation" />

                    <label><b>Password</b></label><br />
                    <input type="password" name="password" id="pass" placeholder="Enter your Password" /*onChange={() => check_pass()}*/ />

                    <label><b>Confirm_Password</b></label><br />
                    <input type="password" name="confirm_password" id="cpass" placeholder="Re-enter your Password" /*onChange={() => check_pass()}*/ />
                    <p><span id='message'></span></p>

                    <label> <b>Username</b></label><br />
                    <input type="text" name="uname" id="Uname" placeholder="Enter your Username" />
                    <a href='/resident'>
                        <input type="button" name="submit" value="Submit" id="submit" /*disabled*/ /></a>

                </form>


            </div>

        </div>
    );
}

export default Register;
