import Chatbot from "../common/Chatbot";
import "./inspector.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Inspector() {
  let [account, setAccount] = useState({
    uname: "",
    email: "",
    location: "",
    occup: "",
    password: "",
  });

  // function Admin(){
  //     function updateData(){
  //         alert('Data Updated!')
  //     }

  let save = async (e) => {
    e.preventDefault();
    // this.onubmit = this.onSubmit.bind(this);
    // console.log("request " + account.confirm_password);

    const regFormData = {
      uname: account.uname,
      email: account.email,
      location: account.location,
      occup: account.occup,
      password: account.password,
    };

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        // url: "https://abcd/php/register.php",
        url: "http://localhost/Phase-2/php/inspector.php",
        data: regFormData,
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        headers: {
          "Content-Type": "application/json",
        },
        // headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        if (response) {
          alert("User Registered Successfully!!!");
          window.location = "/inspector";
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="" id="inspector">
      <div className="section">
        <div className="">
          <div className="text">
            <h1>Welcome Inspector</h1>
          </div>
        </div>
      </div>
      <div>
        <table className="residents-table">
          <thead>Residents</thead>
          <tr>
            <td>Serial No.</td>
            <td>County</td>
            <td>No Of Families Registered </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Hera County</td>
            <td>24</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Zeus County</td>
            <td>13</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ares County</td>
            <td>15</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Apollo County</td>
            <td>17</td>
          </tr>
        </table>
        <table className="residents-table">
          <thead>Business</thead>
          <tr>
            <td>Serial No.</td>
            <td>County</td>
            <td>No Of Distinct Business Registered </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Hera County</td>
            <td>5</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Zeus County</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ares County</td>
            <td>2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Apollo County</td>
            <td>5</td>
          </tr>
        </table>

        <table className="residents-table">
          <thead>Events</thead>
          <tr>
            <td>Serial No.</td>
            <td>Event Name </td>
            <td>Event Location</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Thanksgiving</td>
            <td>Hera County</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Christmas</td>
            <td>Zeus County</td>
          </tr>
          <tr>
            <td>3</td>
            <td>New Year's Eve</td>
            <td>Zeus County</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Carnival</td>
            <td>Zeus_County</td>
          </tr>
        </table>
      </div>
      <div class="column inspector">
        <h2>Update Data</h2>
        <form
          className="resident-form"
          id="insform"
          method="get"
          onSubmit={save}
        >
          {/* <div className="flex-cntr">
            <label for="Res_ID">Resident ID</label>
            <input type="text" id="resid" name="resid" />
          </div> */}
          <div className="flex-cntr">
            <label for="Res_Name">Username</label>
            <input
              type="text"
              id="uname"
              name="uname"
              value={account.uname}
              onChange={handleChange}
            />
          </div>
          <div className="flex-cntr">
            <label for="Res_Email">Email</label>
            <input
              type="text"
              id="resemail"
              name="email"
              value={account.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex-cntr">
            <label for="Res_Address">location</label>
            <input
              type="text"
              id="resadd"
              name="location"
              value={account.location}
              onChange={handleChange}
            />
          </div>
          <div className="flex-cntr">
            <label for="Res_occup">Occupation</label>
            <input
              type="text"
              id="resadd"
              name="occup"
              value={account.occup}
              onChange={handleChange}
            />
          </div>
          <div className="flex-cntr">
            <label for="Res_password">Password</label>
            <input
              type="text"
              id="resadd"
              name="password"
              value={account.password}
              onChange={handleChange}
            />
          </div>
          {<button className="mt-30">Submit </button>}
        </form>
      </div>
      <div className="section form-section">
        {/* <div className="form img">
                <h3>Register Inspector</h3>
                <form className="register-form">
                    <div className="col">
                        <input placeholder="Type here" className="m-10"/>
                        <input placeholder="Type here" className="m-10"/>
                        <select className="m-10">
                            <option value="" disabled selected>Make your selection</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className="col">
                        <textarea rows="6"  className="m-10"></textarea>
                        <button className="m-10">Some button</button>
                    </div>
                </form>
            
            </div> */}

        {/* 
            <div className="form">
                <h3>Register Flights</h3>
                <form className="register-form">
                    <div className="col">
                        <input placeholder="Type here" className="m-10"/>
                        <input placeholder="Type here" className="m-10"/>
                        <select className="m-10">
                            <option value="" disabled selected>Make your selection</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className="col">
                        <textarea rows="6"  className="m-10"></textarea>
                        <button className="m-10">Some button</button>
                    </div>
                </form>
            </div>

            <div className="form">
                <h3>Register Business</h3>
                <form className="register-form">
                    <div className="col">
                        <input placeholder="Type here" className="m-10"/>
                        <input placeholder="Type here" className="m-10"/>
                        <select className="m-10">
                            <option value="" disabled selected>Make your selection</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className="col">
                        <textarea rows="6"  className="m-10"></textarea>
                        <button className="m-10">Some button</button>
                    </div>
                </form>
            </div>

            <div className="form">
                <h3>Register Schools</h3>
                <form className="register-form">
                    <div className="col">
                        <input placeholder="Type here" className="m-10"/>
                        <input placeholder="Type here" className="m-10"/>
                        <select className="m-10">
                            <option value="" disabled selected>Make your selection</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className="col">
                        <textarea rows="6"  className="m-10"></textarea>
                        <button className="m-10">Some button</button>
                    </div>
                </form>
            </div>
      */}
      </div>
      <Chatbot />
    </div>
  );
}

export default Inspector;
