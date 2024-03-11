import React from 'react';
import Box from '@mui/material/Box';
import f1 from '../../assets/images/features/f1.png';
import './Features.css';

function Features() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2, marginX: 12 }}>
      <Box sx={{display:'flex', width:1, marginTop: 2}}>
          <div className="feature-img width-half">
            <img src={f1} alt="f1" />
          </div>
          <div className='feature-detail width-half'>
          <div className="feature-title">Reach Analysis</div>
          <div className="feature-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
      </Box>
      <Box sx={{display:'flex', width:1,  marginTop: 2}}>
          <div className='feature-detail width-half'>
          <div className="feature-title">Reach Analysis</div>
          <div className="feature-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
          <div className="feature-img width-half">
            <img src={f1} alt="f1" />
          </div>
      </Box>
     
       
            
          
    </Box>
  );
}

export default Features;
