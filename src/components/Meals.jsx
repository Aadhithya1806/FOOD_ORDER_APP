import React, { useState } from 'react'
import { useEffect } from 'react'
import MealItem from './MealItem'
const Meals = () => {
    const [mealDatas , setMealDatas] = useState([])
    useEffect(()=>{
        const fetchMeals= async ()=>{
            const response = await fetch("http://localhost:3000/meals")
            if(!response.ok){
                
            }
            const meals = await response.json()
            setMealDatas (meals)
            
        }
        fetchMeals()

         
    },[])

  return (
    <ul id='meals'>
        {mealDatas.map(item => <MealItem meal={item} key={item.id}/>  )}
    </ul>

  )
}

export default Meals