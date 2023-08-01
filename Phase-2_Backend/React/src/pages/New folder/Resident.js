
import Chatbot from "../common/Chatbot";

function Resident() {
    return (
        <div class="wrapper" id="resident">
            <h2>Welcome Resident</h2>
            <div class="line">
            </div>
            <body bgcolor="FBB917">
            <section>
                <div class="row">
                <div class="column">
                    <h2>Available Discounts on Flights</h2>
                    <p>Some text..</p>
                </div>
                <div class="column">
                <h2>Registration for Schools</h2>
                <p>
                    <table>
                    <form>
                        <tr>
                            <td>
                                <label for="name">
                                    Name
                                </label>
                            </td>
                            <td>
                                <input type="text" id="name" />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="email">
                                    Email
                                </label>
                            </td>
                            <td><input type="text" id="email" />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="telnum">
                                    Phone No.
                                </label>
                            </td>
                            <td><input type="text" id="telnum" />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="School Name">
                                    School Name
                                </label>
                            </td>
                            <td><input type="text" id="schoolname" />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="School Loc">
                                    School Location
                                </label>
                            </td>
                            <td><input type="text" id="schoolloc" />
                            </td>
                        </tr>
                    </form>
                   </table>
                </p>
                </div>


                <div class="column">
                <h2>Available Business Schemes</h2>
                <p>Some text..</p>
                </div>
            
                <div class="column">
                <h2>Registration for Events</h2>
                <p>
                    <form className="resident-form">
                        <div>
                            <label for="Event Name">Event Name</label>
                            <input type="text" id="eventname" />
                        </div>
                        <div>
                            <label for="Event Loc">Event Location</label>
                            <input type="text" id="eventloc" />
                        </div>
                        <div>
                            <label for="Event Day">Event Day</label>
                            <input type="text" id="eventday" />
                        </div>
                    </form>
                    {/* <table>
                    <form>
                        <tr>
                            <td><label for="Event Name">
                                    Event Name
                                </label>
                            </td>
                            <td><input type="text" id="eventname" />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="Event Loc">
                                    Event Location
                                </label>
                            </td>
                            <td><input type="text" id="eventloc" />
                            </td>
                        </tr>
                        <tr>
                            <td><label for="Event Day">
                                    Event Day
                                </label>
                            </td>
                            <td><input type="text" id="eventday" />
                            </td>
                        </tr>
                    </form>
                  </table> */}
                  </p>
                </div>
                </div>
            </section>
            </body>
            <Chatbot/>
            </div>
    );
  }
  
  export default Resident;