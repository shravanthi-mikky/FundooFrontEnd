import React from 'react'
import './Dashboard.css'
import Header from '../../Components/Header/header'
import TakeNote1 from '../../Components/TakeNote1/takeNote1';
import TakeNote2 from '../../Components/TakeNote2/takeNote2';
import TakeNote3 from '../../Components/TakeNote3/TakeNote3';
import {getNotes} from '../Services/dataService'

function Dashboard() {
  const [notes,setNotes]=React.useState([])
  const [view, setView] = React.useState(true); 

  const ListenToTakeNoteOne = () => {
    setView(!view);
    };

  React.useEffect(()=> { getNotes()
    .then(response=>{console.log(response)
    setNotes(response.data)
    })
    .catch(error=>{console.log(error)})}
    ,[])
  console.log(notes)
  
  const notesArray = notes.map((note) => (
    <TakeNote3 note={note}/>
  ))
  return (
    <div>
      <div>
        <Header/>
      </div>
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
