import Chatbot from "../common/Chatbot";
import "./admin.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  let [account, setAccount] = useState({
    role: "",
    siremar_id: "",
    email: "",
    uname: "",
    location: "",
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
      role: account.role,
      siremar_id: account.siremar_id,
      email: account.email,
      uname: account.uname,
      location: account.location,
      password: account.password,
    };

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        // url: "https://abcd/php/register.php",
        url: "http://localhost/Phase-2/php/admin.php",
        data: regFormData,
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        headers: {
          "Content-Type": "application/json",
        },
        // headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        if (response) {
          alert("User Registered Successfully!!!");
          window.location = "/admin";
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
    <div class="wrapper" id="admin">
      <h2>Welcome Admin</h2>
      <div class="line"></div>
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
            <td>17</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Apollo County</td>
            <td>15</td>
          </tr>
        </table>
        <img
          src="images/residents.png"
          height="60%"
          width="50%"
          text-align="left"
        />

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
        <img
          src="images/business.jpeg"
          height="60%"
          width="50%"
          text-align="left"
        />

        <table className="residents-table">
          <thead>Inspectors</thead>
          <tr>
            <td>Serial No.</td>
            <td>Name </td>
            <td>County</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Cartik Kataria</td>
            <td>Hera County</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Lavanya Singh</td>
            <td>Ares County</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Naomi Warne</td>
            <td>Apollo County</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Shane Warne</td>
            <td>Zeus County</td>
          </tr>
        </table>
      </div>

      <div class="column inspector">
        <h2>Update Data</h2>

        <form className="admin-form" id="admform" method="get" onSubmit={save}>
          <div className="flex-cntr">
            <label for="">Role</label>
            <select
              className=""
              style={{ width: "143px" }}
              name="role"
              value={account.role}
              onChange={handleChange}
            >
              <option>Select Role</option>
              <option>Admin</option>
              <option>Inspector</option>
              <option>Employee</option>
            </select>
          </div>
          <div className="flex-cntr">
            <label for="Sir_ID">Siremar ID</label>
            <input
              type="text"
              id="sirid"
              name="siremar_id"
              value={account.siremar_id}
              onChange={handleChange}
            />
          </div>
          <div className="flex-cntr">
            <label for="Username">Username</label>
            <input
              type="text"
              id="username"
              name="uname"
              value={account.uname}
              onChange={handleChange}
            />
          </div>
          <div className="flex-cntr">
            <label for="Sir_Email">Email</label>
            <input
              type="text"
              id="siremail"
              name="email"
              value={account.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex-cntr">
            <label for="Sir_location">Location</label>
            <input
              type="text"
              id="siradd"
              name="location"
              value={account.location}
              onChange={handleChange}
            />
          </div>
          <div className="flex-cntr">
            <label for="Sir_password">Password</label>
            <input
              type="text"
              id="sirpass"
              name="password"
              value={account.password}
              onChange={handleChange}
            />
          </div>
          {<button className="mt-30">Submit </button>}
        </form>
      </div>

      {/* <section>
            <div class="row">
                <div class="residents-table">
                    <h2>Reports and Insights</h2>
                    

                    </div>
            </div>
        </section> */}
      <Chatbot />
    </div>
  );
}

export default Admin;
