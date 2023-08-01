
import Chatbot from "../common/Chatbot";
import './admin.scss';

function Admin(){
    return(
    <div class="wrapper" id="admin">
        <h2>Welcome Admin</h2>
        <div class="line"></div>

        <section>
            <div class="row">
                <div class="column">
                    <h2>Services Availed by Residents</h2>
                    <p>Some text..</p>
                </div>
                <div class="column">
                    <h2>Number of Schools per County</h2>
                    <p>Some text..</p>
                </div>
                <div class="column">
                    <h2>Number of Businesses per County</h2>
                    <p>Some text..</p>
                </div>
            </div>
        </section>
        <Chatbot/>
    </div>
    )
}

export default Admin;