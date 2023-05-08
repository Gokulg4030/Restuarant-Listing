import React, { useEffect, useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import { useDispatch , useSelector } from 'react-redux/es/exports';
import { RestListAction } from '../actions/restactionlist';
import { useParams } from 'react-router-dom';

function Restaurentlist() {

    const [restaurantlist ,setRestaurantlist]=useState([])
    //create a function for api call
    // const getRestaurant=async()=>{
    //     //async await
    //    await fetch('/restaurants.json')//async call
    //    .then((data)=>
    //     data.json()
    //     .then((result)=>
    //         setRestaurantlist(result.restaurants))
    //     )
        
      

    // }
// console.log(restaurantlist);


const dispatch =useDispatch()
const result = useSelector(state=>state.restReducer)
console.log(result);
// const {restaurantlist}=result
// console.log(restaurantlist);
    useEffect(()=>{
        // getRestaurant()
        dispatch(RestListAction())
    },[])


  return (
    <Row>
        {
             
              result.restList.map((item)=>(
        
     <Restcard restaurant={item}/>
        ))
           
}
            
            

        

    </Row>
  )
}

export default Restaurentlist