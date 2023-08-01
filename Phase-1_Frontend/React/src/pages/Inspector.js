
import Chatbot from "../common/Chatbot";


function Inspector() {
    return (
      <div className="" id="inspector">
                  <div className="section">
            <div className="">
                <div className="text">
                    <h1>Registration</h1>
                </div>
            </div>
        </div>

        <div className="section form-section">

            <div className="form">
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
            </div>

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
        </div>
        <Chatbot/>
      
      </div>
    );
  }
  
  export default Inspector;
  