import './chatbot.scss';

function Chatbot(){
    function openForm() {
        document.getElementById("myForm").style.display = "block";
        document.getElementById('open-button').style.display = "none"
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
        document.getElementById('open-button').style.display = "block"
      }
    return(
        <div id="chatbot">
            <h1 style={{"text-align":"center"}}>
                Welcome 
            </h1>
    
            <button id="open-button" class="open-button" onClick={openForm}>Chat</button>
    
            <div class="chat-popup" id="myForm">
              <form  class="form-container">
                <h1>Chat</h1>
            
                <label for="msg"><b>Message</b></label>
                <textarea placeholder="Type message.." name="msg" required></textarea>
            
                <button type="submit" class="btn">Send</button>
                <button type="button" class="btn cancel" onClick={closeForm}>Close</button>
              </form>
            </div>
        </div>
    )
}

export default Chatbot