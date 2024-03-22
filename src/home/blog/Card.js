import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './blog.css'

export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 280, borderRadius:"0px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor:"#161A30", padding:0}}>
          <Typography className='our-font' sx={{color:"white", paddingTop:"20px", fontSize:"20px"}}>
            Web 3 Marketing Suite
          </Typography>
          <Typography sx={{color:"#6976be", paddingTop:"10px", fontSize:"12px"}} >
            Feb 12, 2024
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
