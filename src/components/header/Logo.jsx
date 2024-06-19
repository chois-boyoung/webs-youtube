import React from 'react'
import Home from '../../pages/Home'

const logo = () => {
  return (
        <h1 className="header__logo">
          <a href={Home}>
            <em aria-hidden='true'></em>
            <span>CHOIS<br />youtube</span>
          </a>
        </h1>
  )
}

export default logo