
import "./contact.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contact() {
  let [account, setAccount] = useState({
    fname: "",
    lname: "",
    pno: "",
    email: "",
    queries: "",
  });

  let save = async (e) => {
    e.preventDefault();
    // this.onubmit = this.onSubmit.bind(this);
    console.log("request " + account.confirm_password);

    const regFormData = {
      fname: account.fname,
      lname: account.lname,
      pno: account.pno,
      email: account.email,
      queries: account.queries,
    };

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        // url: "https://abcd.cloud/php/register.php",
        url: "http://localhost/Phase-2/php/contact.php",
        data: regFormData,
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        headers: {
          "Content-Type": "application/json",
        },
        // headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        if (response) {
          alert("User Registered Successfully!!!");
          window.location = "/contact";
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
    <div id="contact">
      <h1>Contact Us</h1>
      <div class="line"></div>
      <div class="Contactus">
        <form method="get" onSubmit={save}>
          <label>
            {" "}
            <b>First Name</b> <o></o>{" "}
          </label>
          <label>
            {" "}
            <b>Last Name</b>{" "}
          </label>
          <br />
          <input
            type="text"
            name="fname"
            id="Fname"
            placeholder="Enter your First Name"
            value={account.fname}
            onChange={handleChange}
          />
          <r></r>
          <input
            type="text"
            name="lname"
            id="Lname"
            placeholder="Enter your Last Name"
            value={account.lname}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>
            {" "}
            <b>Phone Number</b>
          </label>{" "}
          <t></t>
          <label>
            {" "}
            <b>Email</b>
          </label>
          <br />
          <input
            type="text"
            name="pno"
            id="Pno"
            placeholder="Enter your 10 digit Phone Number"
            value={account.pno}
            onChange={handleChange}
          />
          <r></r>
          <input
            type="text"
            name="email"
            id="Email"
            placeholder="Enter your Complete Email"
            value={account.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>
            {" "}
            <b>Query </b>
          </label>
          <br />
          <textarea
            rows="5"
            cols="60"
            id="Query"
            placeholder="Write your query here"
            name="queries"
            value={account.queries}
            onChange={handleChange}
          ></textarea>
          <br />
          <br />
          <t>
            <input type="submit" name="submit" id="submit" value="Submit" />
          </t>
        </form>
      </div>
    </div>
  );
}
export default Contact;
