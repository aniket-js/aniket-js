import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header'
import LeftSidebar from '../../components/LeftSidebar';



function HomepageLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content-main" style={{ marginTop: '100px', margin: '4px', display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
                <div className="leftSidebar">
                    <LeftSidebar />
                </div>
                <div className="contentContainer" style={{ marginTop: '70px', flex: 1 }}>
                    {children}
                </div>
                <div className="rightContent" style={{ marginTop: '70px' }}>

                </div>

            </div>
        </>
    )
}

export default HomepageLayout