import React,{useState} from 'react'
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
import { addNote, updateArchive } from '../../Pages/Services/dataService';

function TakeNote2() {
    const [noteObj, setNoteObj] = React.useState({ title: "", note: "",color:"",isArchive:false, });

    const takeTitle = (event) => {
        setNoteObj((prevState) => ({ ...prevState, title: event.target.value }));
    }
    const takeNotes = (event) => {
        setNoteObj((prevState) => ({ ...prevState, note: event.target.value }));
      };
    const submit = () => {
        addNote(noteObj).then((response)=>{console.log(response)
        }).catch((error) => console.log(error))
    }
    const ArchiveNotes = () => {
        setNoteObj((prevState) => ({ ...prevState, isArchive: true }));

    }
  return (
    <div className="takenotetwo" >
            <div className="notesbody">
                <input type="text" onChange={takeTitle} placeholder="Title" />
                <PushPinOutlinedIcon fontSize='small'/>
            </div>
            <div className="notesbodyMiddle">
                <input type="text" onChange={takeNotes} placeholder="Take a note..."/>
            </div>
            <div className="notesfooter">
                <div className="notesicons">
                    <div class='AddAlertIcon IconTakeTwo2'><AddAlertOutlinedIcon fontSize='small' /></div>
                    <div class='AddPerson IconTakeTwo2'><PersonAddAltOutlinedIcon fontSize='small'/></div>
                    <div class='ColorIcon IconTakeTwoo'><PaletteOutlinedIcon fontSize='small'/></div>
                    <div class='ImageIcon IconTakeTwoo'><InsertPhotoOutlinedIcon fontSize='small'/></div>
                    <div class='ArchiveIcon IconTakeTwoo'><ArchiveOutlinedIcon fontSize='small' onClick={ArchiveNotes}/></div>
                    <div class='MoreIcon IconTakeTwoo'><MoreVertOutlinedIcon fontSize='small'/></div>
                    <div class='UndoIcon IconTakeTwoo'><UndoRoundedIcon/></div>
                    <div class='RedoIcon IconTakeTwoo'><RedoRoundedIcon/></div>
                </div>
                <div className="close" >
                    <button class='CloseButton' onClick={submit}>Close</button>
                </div>
            </div>
           
        </div>
    )
}

export default TakeNote2
