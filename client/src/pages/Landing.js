import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = props => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo'/>
      </nav>
      {/* info */}
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>
          I'm baby neutra pok pok shabby chic roof party selfies green juice hashtag. Kale chips kitsch selvage, jianbing tousled offal tilde. Coloring book taiyaki roof party lo-fi. Leggings cred snackwave venmo pitchfork franzen irony twee semiotics chicharrones wolf farm-to-table craft beer everyday carry green juice
          </p>
          <button className="btn btn-hero">
            Login/Register
          </button>
        </div>
        <img src={main} alt="jon hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing







