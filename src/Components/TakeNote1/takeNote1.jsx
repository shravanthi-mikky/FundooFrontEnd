import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './takeNote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function TakeNote1() {
  return (
    <div class='main1'>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 600,
              height: 50,
            },
          }}
          id='note1'> <Paper elevation={4} square>
            <div class='note2'>
            <input  placeholder='Take a note...'></input>
            <CheckBoxOutlinedIcon/>
            <BrushOutlinedIcon/>
            <ImageOutlinedIcon/>
            </div>
          </Paper>
          </Box>
        
    </div>
  )
}

export default TakeNote1
