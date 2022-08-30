import React from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import TextField from '@mui/material/TextField';
import './TakeNote3.css'
import ColorPopper from '../ColorPopper/colorPopper';


function TakeNote3(props) {

  return (
    
    <div >
        <div class="box1Container" style={{backgroundColor:props.note.color}}>
            <div class="top">
                {/* <input class='InputToNote' placeholder={props.note.title}/> */}
                <div>{props.note.title}</div>
                <PushPinOutlinedIcon fontSize='small'/>
            </div>
            <div class="middle">
              {/* <textarea class='InputToNote' placeholder={props.note.note}/> */}
              <div>{props.note.note}</div>
            </div>
            <div class="bottom">
                <AddAlertOutlinedIcon fontSize='small'/>
                <PersonAddAltOutlinedIcon fontSize='small'/>
                {/* <PaletteOutlinedIcon fontSize='small'/> */}
                <ColorPopper action="update" id={props.note.noteID}/>
                <InsertPhotoOutlinedIcon fontSize='small'/>
                <ArchiveOutlinedIcon fontSize='small'/>
                <MoreVertOutlinedIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default TakeNote3
