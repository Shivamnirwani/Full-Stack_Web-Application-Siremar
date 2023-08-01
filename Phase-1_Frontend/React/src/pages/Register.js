
import './Register.scss';

function Register() {
    const toggleMenu = (type)=>{
        let emp = document.getElementsByClassName('reg-emp')[0]
        let res = document.getElementsByClassName('reg-res')[0]

        if(type=='res'){
            emp.style.display = 'none'
            res.style.display = 'block'

        }else{
            emp.style.display = 'block'
            res.style.display = 'none'
        }
    }
    const check_pass = () =>{
        if (document.getElementById('pass').value == document.getElementById('cpass').value) {
            document.getElementById('submit').disabled = false;
            document.getElementById('message').innerHTML = " ";
        } else {
            document.getElementById('message').innerHTML = "Passwords do not match";
            document.getElementById('submit').disabled = true;

        }
    }
  return (
    <div className="">
        <h1>Registration Page</h1>
        <div className="line">
        </div>
        <div className="Register">
            <div className="toggle-menu">
                <input type="button" name="butt1" id="resbut" value="Residents" onClick={()=>toggleMenu('res')}/>
                <input type="button" name="butt2" id="sirempbut" value="Siremar_Employee" onClick={()=>toggleMenu('emp')}/>
            </div>
        
            <form className="reg-emp" id="Register" method="get">

                <label> <b>Role</b></label><br/>
                <select name="Role" id="Role">
                    <option value="Super Admin">admin</option>
                    <option value="Inspector">inspector</option>
                </select>

                <label> <b>Siremar ID</b></label><br/>
                <input type="text" name="SEmpid" id="SEmpid" placeholder="Enter your Siremar ID"/>
                
                <label> <b>Full Name</b></label>
                <input type="text" name="Fullname" id="Fullname" placeholder="Enter your Full Name"/>
                            
                <label> <b>Email</b></label><br/>
                <input type="text" name="Email" id="Email" placeholder="Enter your Email"/>
                                
                <label> <b>Residential ID</b></label><br/>
                <input type="text" name="Resid" id="Resid" placeholder="Enter your Residential ID"/>
                                    
                <label> <b>Location</b></label><br/>
                <input type="text" name="Location" id="Location" placeholder="Enter your current location"/>
                                        
                <label><b>Password</b></label><br/>
                <input type="password" name="password" id="pass" placeholder="Enter your Password" onChange={()=>check_pass()} />
                                        
                <label><b>Confirm_Password</b></label><br/>
                <input type="password" name="confirm_password" id="cpass" placeholder="Re-enter your Password" onChange={()=>check_pass()} />
                <p><span id='message'></span></p>
                
                <label> <b>Username</b></label><br/>
                <input type="text" name="Uname" id="Uname" placeholder="Enter your Username"/>
                <input type="submit" name="submit" value="Submit" id="submit" disabled />         

            </form>

            <form className="reg-res" id="Register" method="get">

                <label> <b>First Name</b></label><br/>
                <input type="text" name="Fname" id="Fname" placeholder="Enter your First Name"/>

                <label> <b>Last Name</b></label><br/>
                <input type="text" name="Lname" id="Lname" placeholder="Enter your Last Name"/>

                        
                <label> <b>Date of Birth</b></label><br/>
                <input type="date" name="DOB" id="DOB"/>
                            
                <label> <b>Age</b></label><br/>
                <input type="text" name="Age" id="Age" placeholder="Enter your Age"/>
                                
                <label> <b>Address</b></label><br/>
                <input type="text" name="Address" id="Address" placeholder="Enter your Complete Address"/>
                                    
                <label> <b>Phone Number</b></label><br/>
                <input type="text" name="Pno" id="Pno" placeholder="Enter your 10 digit Phone Number"/>
                                        
                <label> <b>Time on Island</b></label><br/>
                <input type="text" name="Toi" id="Toi" placeholder="Enter the time spent on island"/>
                                            
                <label> <b>Residential Status</b></label><br/>
                <input type="text" name="Resstatus" id="Resstatus" placeholder="Enter your Residential Status"/>
                                                
                <label> <b>Email</b></label><br/>
                <input type="text" name="Email" id="Email" placeholder="Enter your Complete Email"/>
                                                    
                <label> <b>Occupation</b></label><br/>
                <input type="text" name="Occup" id="Occup" placeholder="Enter your Occupation"/>
                                                        
                <label><b>Password</b></label><br/>
                <input type="password" name="password" id="pass" placeholder="Enter your Password" onChange={()=>check_pass()} />
                                                        
                <label><b>Confirm_Password</b></label><br/>
                <input type="password" name="confirm_password" id="cpass" placeholder="Re-enter your Password" onChange={()=>check_pass()} />
                <p><span id='message'></span></p>
                
                <label> <b>Username</b></label><br/>
                <input type="text" name="Uname" id="Uname" placeholder="Enter your Username"/>
                                                                
                <input type="submit" name="submit" value="Submit" id="submit" disabled />
                                                                
            </form>


        </div>
    
    </div>
  );
}
export default Register;