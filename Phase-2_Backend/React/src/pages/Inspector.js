import Chatbot from "../common/Chatbot";
import './inspector.scss';
    

function Inspector() {
    function updateData(){
        alert('Data Updated!')
    }
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
                <form className="resident-form">
                    <div className="flex-cntr">
                        <label for="Res ID">Resident ID</label>
                        <input type="text" id="resid" />
                    </div>
                    <div className="flex-cntr">
                        <label for="Res Name">Name</label>
                        <input type="text" id="resname" />
                    </div>
                    <div className="flex-cntr">
                        <label for="Res Email">Email</label>
                        <input type="text" id="resemail" />
                    </div >
                    <div className="flex-cntr">
                        <label for="Res Address">Address</label>
                        <input type="text" id="resadd" />
                    </div >
                    { <button className="mt-30" onClick={updateData}>Submit </button> }
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
        <Chatbot/>
      
      </div>
    );
  }
  
  export default Inspector;
  