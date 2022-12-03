import React from 'react'
import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material'
function TextArea({ children, onChange, ...props }) {
    return (
        <TextareaAutosize
            {...props}
            onChange={onChange}

            minRows={8}
            style={{ width: '100%', resize: 'vertical', backgroundColor: 'inherit', color: 'inherit' }}
        >
            {children}
        </TextareaAutosize>
    )
}

export default TextArea

TextArea.prototype = TextareaAutosizeProps