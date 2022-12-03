import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';


export default function CollapsableCard({ title, children }) {
    return (
        <div>
            <Accordion sx={{ marginBottom: "16px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"

                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

CollapsableCard.prototype = {
    title: PropTypes.string,
    children: PropTypes.node
}