import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
 
export const CakeView = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button   onClick={() => dispatch(ordered())}>Order Cake and get free ice cream</button>
      <button   onClick={() => dispatch(restocked(5))}>Restock 5 Cakes</button>
    </div>
  )
}