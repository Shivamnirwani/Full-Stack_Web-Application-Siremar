import Chatbot from "../common/Chatbot";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Resident() {
  let [account, setAccount] = useState({
    school_name: "",
    school_location: "",
    school_contactno: "",

    event_name: "",
    event_location: "",
    event_day: "",
  });

  // function Resident() {
  //   function applyDiscount() {
  //     alert("Successful!");
  //   }
  //   function registerSchool() {
  //     alert("School Registered Successfully!");
  //   }

  let save = async (e) => {
    e.preventDefault();
    // this.onubmit = this.onSubmit.bind(this);
    // console.log("request " + account.confirm_password);

    const regFormData = {
      school_name: account.school_name,
      school_location: account.school_location,
      school_contactno: account.school_contactno,
      event_name: account.event_name,
      event_location: account.event_location,
      event_day: account.event_day,
    };

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        // url: "https://abcd.cloud/php/register.php",
        url: "http://localhost/Phase-2/php/resident.php",
        data: regFormData,
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        headers: {
          "Content-Type": "application/json",
        },
        // headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        if (response) {
          alert("User Registered Successfully!!!");
          window.location = "/resident";
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
    <div class="wrapper" id="resident">
      <h2>Welcome Resident</h2>
      <div class="line"></div>

      <section>
        <div class="row" style={{ "justify-content": "center" }}>
          <div
            class="column"
            style={({ "text-align": "center" }, { position: "relative" })}
          >
            <h2>Available Discounts on Flights</h2>
            <div id="voucher">
              <h6 class="vc">GET 20% OFF FROM MARGARITA TO CARACAS</h6>
              <h6 class="vc">GET 10% OFF ON FIRST FLIGHT TO CARACAS</h6>
              <h6 class="vc">GET 20% OFF ON YOUR 5TH FERRIES</h6>
            </div>
          </div>
          <div class="column">
            <h2>Registration for Schools</h2>
            <form
              className="resident-form"
              id="resform"
              method="get"
              onSubmit={save}
            >
              <div>
                <label for="School Name">School Name</label>
                <input
                  type="text"
                  id="a"
                  name="school_name"
                  value={account.school_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="County Loc">County Location</label>
                <input
                  type="text"
                  id="b"
                  name="school_location"
                  value={account.school_location}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="Contact Number">Contact Number</label>
                <input
                  type="text"
                  id="c"
                  name="school_contactno"
                  value={account.school_contactno}
                  onChange={handleChange}
                />
              </div>
              <button className="mt-30">
                {/* <button className="mt-30" onClick={registerSchool}> */}
                Submit{" "}
              </button>
            </form>
          </div>

          <div
            class="column"
            style={({ "text-align": "center" }, { position: "relative" })}
          >
            <h2>Available Business Schemes</h2>
            <div id="business">
              <h6 class="bc">REAL ESTATE COST REDUCTION AT APOLLO COUNTY</h6>
              <h6 class="bc">HERA COUNTY EVENT--10% OFF</h6>
              <h6 class="bc">10% DISCOUNT AT GROCERY STORES</h6>
            </div>
          </div>

          <div class="column">
            <h2>Registration for Events</h2>
            <p>
              <form
                className="resident-form"
                id="events"
                method="get"
                onSubmit={save}
              >
                <div>
                  <label for="Event Name">Event Name</label>
                  <input
                    type="text"
                    id="eventname"
                    name="event_name"
                    value={account.event_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label for="Event Loc">Event Location</label>
                  <input
                    type="text"
                    id="eventloc"
                    name="event_location"
                    value={account.event_location}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label for="Event Day">Event Day</label>
                  <input
                    type="text"
                    id="eventday"
                    name="event_day"
                    value={account.event_day}
                    onChange={handleChange}
                  />
                </div>
                <button className="mt-30">
                  {/* <button className="mt-30" onClick={applyDiscount}>
                  Submit{" "} */}
                  Submit{" "}
                </button>{" "}
                {/* </button> */}
              </form>
            </p>
          </div>
        </div>
      </section>
      <Chatbot />
    </div>
  );
}
export default Resident;
