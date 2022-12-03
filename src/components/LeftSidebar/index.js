import { Box, styled } from '@mui/material'
import Link from 'next/link';
import React from 'react'


const MenuItem = styled('div')(({ theme }) => ({
    padding: 10,
    marginRight: 5,
    cursor: 'pointer',
    borderRadius: 10,
    fontWeight: 500,
    "&:hover": {
        backgroundColor: "#474747",
        color: '#fff'
    },
}));


function LeftSidebar() {


    return (
        <>
            <Box className="leftContent" sx={{

                minWidth: 200,
                paddingTop: 10
            }}>
                <div className="wrapLeft" style={{ position: 'fixed', top: 70, borderRight: '1px solid #474747', minWidth: 200, minHeight: 'calc(100vh - 60px)' }}>

                    <MenuItem>
                        <Link href="/">
                            <div className="text">
                                Home
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <div className="text">
                            Recent
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div className="text">
                            Popular
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div className="text">
                            Javascript
                        </div>
                    </MenuItem>
                </div>

            </Box>

        </>
    )
}

export default LeftSidebar