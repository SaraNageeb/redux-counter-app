import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cake: cakeReducer,
    icecream: icecreamReducer,


  },
});
