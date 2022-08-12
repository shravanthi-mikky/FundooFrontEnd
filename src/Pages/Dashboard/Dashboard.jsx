import React from 'react'
import Header from '../../Components/Header/header'
import {getNotes} from '../Services/dataService'

function Dashboard() {
  const [notes,setNotes]=React.useState([])

  React.useEffect(()=> { getNotes().then(response=>{setNotes(response.data)}).catch(error=>{console.log(error)})},[])
  
  
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        {/* conditional rendering */}
      </div>
      <div>
        {/* {notes.map()} */}
      </div>
    </div>
  )
}

export default Dashboard
