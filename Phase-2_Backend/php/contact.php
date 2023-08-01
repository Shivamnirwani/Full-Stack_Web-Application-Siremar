/*
Nirwani Shivam       1001923706
Kataria Kartik       1001944865
Upadhyay Sunil Akash 1001957955
*/
import './contact.scss';
function Contact(){
    return(
    <div id="contact">
            <h1>Contact Us</h1>
            <div class="line">
            </div>
        <div class="Contactus">
            <label> <b>First Name</b> <o></o> </label>
            <label> <b>Last Name</b> </label>
            <br/>
            <input type="text" name="Fname" id="Fname" placeholder="Enter your First Name"/>
            <r></r><input type="text" name="Lname" id="Lname" placeholder="Enter your Last Name"/>
            <br/><br/>
            <label> <b>Phone Number</b></label> <t></t> 
            <label> <b>Email</b></label><br/>
            <input type="text" name="Pno" id="Pno" placeholder="Enter your 10 digit Phone Number"/>
            <r></r>
            <input type="text" name="Email" id="Email" placeholder="Enter your Complete Email"/>
            <br/><br/>
            <label> <b>Query </b></label><br/>
            <textarea rows = "5" cols = "60" id = "Query" placeholder="Write your query here">
            </textarea><br/><br/>
            <t><input type="submit" name="submit" id ="submit" value = "Submit"/></t>
        </div>
    </div>
    )
}
export default Contact