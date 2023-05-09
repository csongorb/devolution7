import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer-container'>

          <div className='social-icons'>

            <a href='https://twitter.com/devolutionbln'
              className='social-icon-link twitter'
              target='_blank' rel="noreferrer"
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link mastodon'
              href='https://sunny.garden/@devolution'
              target='_blank' rel="noreferrer"
              aria-label='Mastodon'
            >
              <i className='fab fa-mastodon' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/@devolution6462'
              target='_blank' rel="noreferrer"
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>

          </div>

          <div className='website-rights'><a target="_blank" rel="noopener noreferrer" href="http://devolution.online/impressum/">Impressum</a> / <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/datenschutz/">Datenschutz</a></div>

        </div>
  )
}

export default Footer
