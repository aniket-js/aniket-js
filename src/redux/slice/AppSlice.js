import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    themeMode: 'dark'
}

export const appSlice = createSlice({
    name: "App",
    initialState,
    reducers: {
        setTheme(state, action) {
            state.themeMode = action.payload
        }
    }
})

const { actions, reducer } = appSlice;

export const { setTheme } = actions

export const selectTheme = (state) => state.appSlice.themeMode;

export default reducer;