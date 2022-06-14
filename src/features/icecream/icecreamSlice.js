import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'
// cakeOrdered its an offer buy one cake and get ice cream free 
//in case a Cake is ordered decrese number of  ice creem 
// so we want to know if cake is ordered or not 
const initialState = {
  numOfIcecreams: 10
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecreams--
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {
      state.numOfIcecreams--
    })
  }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions