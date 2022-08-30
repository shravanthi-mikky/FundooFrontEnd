import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { updateColor } from '../../Pages/Services/dataService';


export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const colors = ["Red","Blue","Green","Purple","Pink","Black","Indigo","yellow","Grey","Orange"]

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const takeColor = (color) => {
    if( props.action==="create"){
        props.ListenToColorPopper(color)
    }
    if( props.action==="update"){
        let data = {
          noteid: props.id,
          color: color
        }
        updateColor(data).then((response)=>{console.log(response)
        }).catch((error) => console.log(error))
    }
  }

  return (
    <div>
      <PaletteOutlinedIcon fontSize='small' onClick={handleClick}/>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' , display:"flex"}}>
          {colors.map((color) => 
          <div style={{width:35, height:35, backgroundColor:color , margin:"5px" , borderRadius:50}} onClick={() => takeColor(color)}>

          </div>)}
        </Box>
      </Popper>
    </div>
  );
}