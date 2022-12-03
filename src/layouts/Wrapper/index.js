import React, { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useSiteTheme, { ThemeMode } from '../../hooks/useSiteTheme';
import HomepageLayout from '../HomepageLayout';


function Wrapper({ children }) {

    const { themeMode } = useSiteTheme();

    const theme = useMemo(() => createTheme({

        palette: {

            mode: themeMode,

            background: {
                dark: "hsl(230, 17%, 14%)",
                light: "hsl(0, 0%, 100%)",

            }
        }
    }),
        [themeMode]
    );


    return (
        <ThemeProvider theme={theme}>
            <HomepageLayout>
                {children}
            </HomepageLayout>
        </ThemeProvider>
    )
}

export default Wrapper