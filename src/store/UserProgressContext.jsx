import { createContext, useState } from "react";
const UserProgressContext = createContext({
    progress:'',
    showCart :()=>{},
    hideCart :()=>{},
    showCheckout :()=>{},
    hideCheckout :()=>{}
})

export const UserProgressContextProvider = ({children})=>{
   const [userProgress,setUserProgress] = useState('')
   const showCart =()=>{
    setUserProgress('CART')
   }
   const hideCart =()=>{
    setUserProgress('')
   }
   const showCheckout =()=>{
    setUserProgress('CHECKOUT')
   }
   const hideCheckout =()=>{
    setUserProgress('')
   }
   const userProgressContext ={
    progress:userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
   } 
   return ( <UserProgressContext.Provider value={userProgressContext}>{children}

    </UserProgressContext.Provider>)
}


export default UserProgressContext;