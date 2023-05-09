import React, {useState, useEffect} from 'react'
import './Navbar.css';
import logo from "../../src/assets/Logo_Devolution_small.png"


function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleItemClick = (id) => {
        if (props.onItemClick) {
          props.onItemClick(id);
          closeMobileMenu();
        }
      };

    const showButton = () => {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(( )=>
        {
            showButton();
        },[button]);

    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="devolution logo"/>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <p className='nav-links' onClick={() => handleItemClick('devolution')}>
                            Devolution</p>                                      
                        <p className='nav-links' onClick={() => handleItemClick('total-digital')}>
                            Total Digital</p>                                     
                        <p className='nav-links' onClick={() => handleItemClick('evolution')}>
                        Evolution of Lonely Mountains</p>                                       
                        <p className='nav-links' onClick={() => handleItemClick('timeline')}>
                        Explore the Timeline</p>                   
                        <p className='nav-links' onClick={() => handleItemClick('versions')}>
                        Play the Versions</p>                    
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
