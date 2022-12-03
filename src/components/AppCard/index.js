import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function AppCard({ item, category }) {
    return (
        <Card sx={{ minWidth: 400, maxWidth: 400 }}>
            <Link href={item.path} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {category}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {item.heading}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Description
                    </Typography>
                    <Typography variant="body2">
                        {item.desc}
                    </Typography>
                </CardContent>
            </Link>

        </Card>
    );
}