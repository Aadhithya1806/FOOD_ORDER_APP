import MealItem from './MealItem'
import useHttp from '../hooks/useHttp'
import Error from './Error'
const reqConf = {}
const Meals = () => {
  const {datas:mealDatas, isLoading,error}= useHttp("http://localhost:3000/meals",reqConf,[]) 

  if(isLoading){
    return <p className='center'>Loading ....</p>
  }
  if(error){
    return <Error message={error} title="Failed To Fetch Meals"></Error>
  }

  return (
    <ul id='meals'>
        {mealDatas.map(item => <MealItem meal={item} key={item.id}/>  )}
    </ul>

  )
}

export default Meals