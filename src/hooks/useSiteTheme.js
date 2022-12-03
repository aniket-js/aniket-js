import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTheme, setTheme } from '../redux/slice/AppSlice'


export const ThemeMode = {
    DARK: 'dark',
    LIGHT: 'light'
}

function useSiteTheme() {
    const themeMode = useSelector(selectTheme)
    const dispatch = useDispatch();

    function changeTheme(themeMode) {
        dispatch(setTheme(themeMode))
    }




    return { themeMode, changeTheme }
}

export default useSiteTheme