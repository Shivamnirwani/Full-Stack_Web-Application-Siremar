import Chatbot from "../common/Chatbot";
import './admin.scss';

function Admin(){
    function updateData(){
        alert('Data Updated!')
    }
    return(
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
            <img src="images/residents.png" height="60%" width="50%" text-align="left"/>
            
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
            <img src="images/business.jpeg" height="60%" width="50%" text-align="left"/>

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
            
                <form className="resident-form">
                    <div className="flex-cntr">
                        <label for="">Role</label>
                        <select className="" style={{"width":"143px"}}>
                            <option>Admin</option>
                            <option>Inspector</option>
                        </select>
                    </div>
                    <div className="flex-cntr">
                        <label for="Sir ID">Siremar ID</label>
                        <input type="text" id="sirid" />
                    </div>
                    <div className="flex-cntr">
                        <label for="Sir Name">Name</label>
                        <input type="text" id="sirname" />
                    </div>
                    <div className="flex-cntr">
                        <label for="Sir Email">Email</label>
                        <input type="text" id="siremail" />
                    </div >
                    <div className="flex-cntr">
                        <label for="Sir Address">Address</label>
                        <input type="text" id="siradd" />
                    </div >
                    { <button className="mt-30" onClick={updateData}>Submit </button> }
                </form>
        </div>
        

        {/* <section>
            <div class="row">
                <div class="residents-table">
                    <h2>Reports and Insights</h2>
                    

                    </div>
            </div>
        </section> */}
        <Chatbot/>
    </div>
    )
}

export default Admin;