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


function TakeNote3() {
  return (
    <div class='main3'>
        <div class="box1 item">
            <div class="top part">
                <input placeholder="Title"></input>
                <PushPinOutlinedIcon fontSize='small'/>
            </div>
            <div class="middle part"><textarea placeholder='Take a note'></textarea></div>
            <div class="bottom part">
                <AddAlertOutlinedIcon fontSize='small'/>
                <PersonAddAltOutlinedIcon fontSize='small'/>
                <PaletteOutlinedIcon fontSize='small'/>
                <InsertPhotoOutlinedIcon fontSize='small'/>
                <ArchiveOutlinedIcon fontSize='small'/>
                <MoreVertOutlinedIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default TakeNote3
