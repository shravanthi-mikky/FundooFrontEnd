import React from 'react'
import './takeNote2.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

function takeNote2() {
  return (
    <div className="takenotetwo" >
            <div className="notesbody">
                <div className="note">
                    <input type="text" placeholder="Title" />
                </div>
                <div className="take">
                    <PushPinOutlinedIcon fontSize='small'/>
                </div>
            </div>
            <div className="notesbody">
                <div className="note">
                    <input type="text" placeholder="Take a note..."/>
                </div>
            </div>
            <div className="notesfooter">
                <div className="notesicons">
                    <AddAlertOutlinedIcon fontSize='small'/>
                    <PersonAddAltOutlinedIcon fontSize='small'/>
                    <PaletteOutlinedIcon fontSize='small'/>
                    <InsertPhotoOutlinedIcon fontSize='small'/>
                    <ArchiveOutlinedIcon fontSize='small'/>
                    <MoreVertOutlinedIcon fontSize='small'/>
                    <UndoRoundedIcon/>
                    <RedoRoundedIcon/>
                </div>
                <div className="close" >
                    close
                </div>
            </div>
           
        </div>
  )
}

export default takeNote2
