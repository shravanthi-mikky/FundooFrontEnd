import React ,{useState} from 'react'
import './Dashboard.css'
import Header from '../../Components/Header/header'
import TakeNote1 from '../../Components/TakeNote1/takeNote1';
import TakeNote2 from '../../Components/TakeNote2/takeNote2';
import TakeNote3 from '../../Components/TakeNote3/TakeNote3';
import {getNotes} from '../Services/dataService'
import MiniDrawer from '../../Components/Drawer/Drawer';

function Dashboard() {
  const [notes,setNotes]=useState([])
  const [view, setView] = useState(true); 

  const [drawer,setDrawer] = useState(true)

  const [currentNotes, setCurrentNotes] = useState("Notes")

  const ListenToTakeNoteOne = () => {
    setView(!view);
    };

  const listenToHeader = () => {
    setDrawer(!drawer);
  }

  const listenToDrawer = (data) => {
    setCurrentNotes(data);
  }
  React.useEffect(()=> { 
    getNotes()
    .then(response=>{ 
      console.log(response)
      let filterArray=response.data.filter((note)=>{
        if(currentNotes == "Notes")
        {
          if(note.isArchive == false && note.isTrash == false){
            return note
          }
        }
        if(currentNotes == "Archive")
        {
          if(note.isArchive == true && note.isTrash == false){
            return note
          }
        }
        if(currentNotes == "Trash")
        {
          if(note.isArchive == false && note.isTrash == true){
            return note
          }
        }

      })
      /* console.log(response) */
    /* setNotes(response.data) */
    setNotes(filterArray)
    })
    .catch(error=>{console.log(error)})}
    ,[currentNotes])
  console.log(notes)
  
  const notesArray = notes.map((note) => (
    <TakeNote3 note={note}/>
  ))
  return (
    <div>
      <div>
        <Header listenToHeader={listenToHeader}/>
      </div>
      <MiniDrawer drawer={drawer} listenToDrawer={listenToDrawer}/>
      <div>
         {view?<TakeNote1 ListenToTakeNoteOne={ListenToTakeNoteOne}/>:<TakeNote2 />}
      </div>
      <div class='ListRenderingPart'>
        {notesArray}
      </div>
    </div>
  )
}

export default Dashboard
