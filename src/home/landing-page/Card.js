import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards() {
  return (
    <div>
     
      <Card  sx={{ maxWidth: 345, backgroundColor : "pink" }}>
        <CardActionArea>
        <CardContent sx={{backgroundColor : " white"}}>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
         
          <CardContent sx={{padding:2}}>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size='small' readOnly />
    </Stack>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:10}}>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
