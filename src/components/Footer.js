import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>

          <div className='social-icons'>

            <Link
              className='social-icon-link twitter'
              to='https://twitter.com/devolutionbln'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link mastodon'
              to='https://sunny.garden/@devolution'
              target='_blank'
              aria-label='Mastodon'
            >
              <i className='fab fa-mastodon' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/@devolution6462'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>

          </div>

          <div className='website-rights'><a target="_blank" rel="noopener noreferrer" href="http://devolution.online/impressum/">Impressum</a> / <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/datenschutz/">Datenschutz</a></div>

        </div>
  )
}

export default Footer
