import React from 'react'
import logo from "../assets/logo.jpg"
import Button from '../ui/Button'
import { useContext } from 'react'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'
const Header = () => {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const totalCartItems = cartCtx.items.reduce((totalItems,item)=>{
        return totalItems + item.quantity
    },0)

    const handleShowCart =()=>{
        userProgressCtx.showCart()
    }
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt="logo" />
            <h1>A-MEALS</h1>
        </div>
        <nav>
            
            <Button onClick={handleShowCart} textOnly>Cart ({totalCartItems}) </Button>
        </nav>


    </header>
  )
}

export default Header