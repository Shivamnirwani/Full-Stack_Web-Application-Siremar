import './navigation.scss';

function Navigation() {
  let list = ['/','/about']
  return (
    
    <div class="navbar">
        
        <img src="images/Siremar.jpeg" alt="subdivision image" height="100%" width="10%"/>
        <nav>
            <ul id='MenuItems'>
                <li><a href='/'>Home</a></li>
                <li><a href='about'>About Us</a></li>
                <li><a href='services'>Services</a></li>
                <li><a href='contact'>Contact</a></li>
                <li><a href='login'>Login/Register</a></li>
                {window.location.pathname == '/' || window.location.pathname == '/about' || window.location.pathname == '/services' || window.location.pathname == '/contact' || window.location.pathname == '/login' || window.location.pathname == '/resident' ? '':
                <>
                <li><a href='admin'>Admin</a></li>
                <li><a href='inspector'>Inspector</a></li>
                </>
                }

                <li><a href='resident'>Resident</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navigation;
