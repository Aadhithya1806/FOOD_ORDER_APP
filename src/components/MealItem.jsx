import React from 'react'
import { currencyFormatter } from '../util/CurrencyFormatter'
import Button from '../ui/Button'

const MealItem = ({meal}) => {
  return (
    <li className='meal-item'>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
            <h3>{meal.name}</h3>
            <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
            <p className='meal-item-description'>{meal.description}</p>

            </div>
            <div>
                <Button className='meal-item-actions'>Add To Cart</Button>
            </div>
        </article>

    </li>
  )
}

export default MealItem