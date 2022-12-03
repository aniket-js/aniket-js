import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slice/AppSlice';



const store = configureStore({
    reducer: {
        appSlice
    }
})



export default store;