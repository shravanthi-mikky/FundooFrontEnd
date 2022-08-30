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

  const ListenToTakeNoteOne = () => {
    setView(!view);
    };

  const listenToHeader = () => {
    setDrawer(!drawer);
  }

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
        <Header listenToHeader={listenToHeader}/>
      </div>
      <MiniDrawer drawer={drawer}/>
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
