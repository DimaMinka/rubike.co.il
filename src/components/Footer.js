import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/" title="Logo">
            <img
              src={logo}
              alt="logo for rubike website - link to homepage"
              style={{ width: '14em', height: '10em' }}
            />
          </Link>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column">
                <p>Все права защищены © - {new Date().getFullYear()} - cdk - dima minka - wpbro</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
