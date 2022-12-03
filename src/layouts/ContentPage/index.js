import { Paper } from '@mui/material'
import React from 'react'

function ContentPage({ title, desc, examples, children }) {
    return (
        <Paper elevation={2} className="container" style={{ margin: 'auto', maxWidth: 900, minHeight: '500px', padding: 10 }}>
            <div className="title" style={{ fontSize: 30, fontWeight: 500, }}>
                {title}
            </div>
            <div className="desc" style={{
                marginTop: 10, fontStyle: 'italic', fontSize: 16, border: '0.4px solid #474747',
                padding: 20,
                width: 'fit-content'
            }}>
                {desc}
            </div>
            {
                examples && <div className="examples">
                    {examples}
                </div>
            }
            <div className="main-content-container" style={{ marginTop: 20 }}>
                {children}
            </div>
        </Paper>
    )
}

export default ContentPage