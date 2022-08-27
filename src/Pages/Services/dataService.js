import axios from 'axios'

let headersConfig = {
    headers:{
        authorization:"Bearer"+" "+localStorage.getItem("token")
  
    }
    
}
export const getNotes = () => {
    let response = axios.get("https://localhost:44340/api/Note/AllNotes",headersConfig)
    return response
}
export const addNote = (obj) =>{
    let response = axios.post("https://localhost:44340/api/Note/Add",obj, headersConfig)
    return response
}
export const updateArchive = (obj) =>{
    let response = axios.post("https://localhost:44340/api/Note/{NoteId}/IsArchive",obj, headersConfig)
    return response
}
