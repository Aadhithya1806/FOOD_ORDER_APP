import React from 'react'
import { currencyFormatter } from '../util/CurrencyFormatter'


const CartItem = ({name,qty,price,decreaseHandler,increaseHandler}) => {
  return (
    <li className='cart-item'>
        <p>{name} - {qty} x {currencyFormatter.format(price)}</p>
        <p className='cart-item-actions'>
            <button onClick={decreaseHandler}>-</button>
            <span>{qty}</span>
            <button onClick={increaseHandler}>+</button>

        </p>
    </li>
  )
}

export default CartItem