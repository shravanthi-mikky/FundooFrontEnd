import axios from 'axios'


let headersConfig = {
    headers:{
        authorization:"Bearer"+" "+localStorage.getItem("token")
  
    }
    
}

export const getNotes = () => {
    let headersConfig = {
        headers:{
            Authorization:"Bearer"+" "+localStorage.getItem("token")
        }
        
    }
    console.log(headersConfig)
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



export const updateColor = (obj) =>{
    let response = axios.put(`https://localhost:44340/api/Note/${obj.noteid}/Color?color=${obj.color}`,obj, headersConfig)
    return response
}

export const updateTrash = (obj) =>{
    let response = axios.post(`https://localhost:44340/api/Note/${obj.noteid}/IsTrash`,obj, headersConfig)
    return response
}
