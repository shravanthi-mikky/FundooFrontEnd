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
import { updateArchiveNotes } from '../../Pages/Services/dataService';
import { updatePinNotes } from '../../Pages/Services/dataService';
import { updateTrashNotes } from '../../Pages/Services/dataService';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function TakeNote3(props) {

  const updateArchive = () => {
    let data = {
      noteid:props.note.noteID
    }
    updateArchiveNotes(data)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})
  }

  const updatePin = () => {
    let data = {
      noteid:props.note.noteID
    }
    updatePinNotes(data)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})
  }

  const updateTrash = () => {
    let data = {
      noteID:props.note.noteID
    }
    updateTrashNotes(data)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})
  }


  return (
    
    <div >
        <div class="box1Container" style={{backgroundColor:props.note.color}}>
            <div class="top">
                {/* <input class='InputToNote' placeholder={props.note.title}/> */}
                <div>{props.note.title}</div>
                <PushPinOutlinedIcon fontSize='small' onClick={updatePin}/>
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
                <ArchiveOutlinedIcon fontSize='small' onClick={updateArchive}/>
                <DeleteOutlineOutlinedIcon style={{ cursor: "pointer" }} onClick={updateTrash}/>
                <MoreVertOutlinedIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default TakeNote3
