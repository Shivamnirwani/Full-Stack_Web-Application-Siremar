import Chatbot from "../common/Chatbot";

function Resident() {
    function applyDiscount(){
        alert('Successful!')
    }
    function registerSchool(){
        alert('School Registered Successfully!')
    }
    return (
        <div class="wrapper" id="resident">
            <h2>Welcome Resident</h2>
            <div class="line">
            </div>
            
            <section>
                <div class="row" style={{"justify-content":'center'}}>
                <div class="column" style={{"text-align":'center' }, {"position":'relative'}}>
                    <h2>Available Discounts on Flights</h2>
                    <div id="voucher">
                    <h6 class="vc">GET 20% OFF FROM MARGARITA TO CARACAS</h6>
                    <h6 class="vc">GET 10% OFF ON FIRST FLIGHT TO CARACAS</h6>
                    <h6 class="vc">GET 20% OFF ON YOUR 5TH FERRIES</h6>
                    </div>

                </div>
                <div class="column">
                <h2>Registration for Schools</h2>
                <form className="resident-form">
                        <div>
                            <label for="School Name">School Name</label>
                            <input type="text" id="a" />
                        </div>
                        <div>
                            <label for="County Loc">County Location</label>
                            <input type="text" id="b" />
                        </div>
                        <div>
                            <label for="Contact Number">Contact Number</label>
                            <input type="text" id="c" />
                        </div>
                        <button className="mt-30" onClick={registerSchool}>Submit </button>
                    </form>
                </div>


                <div class="column" style={{"text-align":'center'}, {"position":'relative'}}>
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
                        </div >
                        <button className="mt-30" onClick={applyDiscount}>Submit </button>
                    </form>
                  
                  </p>
                </div>
                </div>
            </section>
            <Chatbot/>
            </div>
    );
  }
  
  export default Resident;