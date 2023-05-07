import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from "../../src/assets/small logo-no-bg.png"
function Footer() {
  return (
    <div className='footer-container'>

          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={logo} alt="devolution logo"/>
            </Link>
          </div>
          <small className='website-rights'>DEVOLUTION © 2023</small>
          <div className='social-icons'>

            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
  )
}

export default Footer
