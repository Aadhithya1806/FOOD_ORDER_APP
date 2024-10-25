import React from 'react'
import logo from "../assets/logo.jpg"
import Button from '../ui/Button'



const Header = () => {
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt="logo" />
            <h1>A-MEALS</h1>
        </div>
        <nav>
            
            <Button textOnly>Cart ({0})b </Button>
        </nav>


    </header>
  )
}

export default Header