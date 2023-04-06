import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                If you reached this place you must subscribe!
            </p>
            <p className='footer-subscription-text'>seriously, we are interesting</p>
            <div className='input-areas'>
                <form>
                    <input type="email" name="email" placeholder='your email' className='footer-input'/>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                <Link to='/about'>How it works</Link>
                <Link to='/wip-page'>Something</Link>
                <Link to='/wip-page'>Something</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Partners</h2>
                <Link to='/wip-page'>Partner1</Link>
                <Link to='/wip-page'>Partner2</Link>
                <Link to='/wip-page'>Partner3</Link>
                </div>
            </div>
        </div>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>              
            <img src={process.env.PUBLIC_URL + 'small logo-no-bg.png'} alt="devolution logo"/>
            </Link>
          </div>
          <small class='website-rights'>DEVOLUTION © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer