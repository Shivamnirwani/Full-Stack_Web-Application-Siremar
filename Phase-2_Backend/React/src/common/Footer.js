import './navigation.scss';

function Footer() {
  return (
    
    <div className="">
        
       
        <footer className="footer">
            <div className="l-footer">
            <h1>
                <img src="images/Siremar.jpeg" width="60%" alt=""/>
            </h1>
            </div>
            <ul className="r-footer">
                <li>
                    <h2>Contact</h2>
                    <ul className="box">
                        <li><a href="#">123-654-2949</a></li>
                        <li><a href="#">siremar.vene.org</a></li>
                        <li><a href="#">Siremar, Venezuela, VZ-58585</a></li>
                    </ul>
                </li>
                <li className="features">
                    <h2>Links</h2>
                    <ul className="box">
                        <li><a href="about.html">About</a></li>
                        <li><a href="homepage.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="Login.html">Login/Register</a></li>
                    </ul>
                </li>
            </ul>
            <div className="b-footer">
            <p>
                All rights reserved by Siremar 2022 </p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;

