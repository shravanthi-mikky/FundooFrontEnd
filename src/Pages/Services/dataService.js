import axios from 'axios'


let headersConfig = {
    headers:{
        authorization:"Bearer"+" "+localStorage.getItem("token")
    } 
}

export const getNotes = () => {
    console.log(headersConfig)
    let response = axios.get("https://localhost:44340/api/Note/AllNotes",headersConfig)
    return response
}

export const getNotesById = (obj) => {
    console.log(headersConfig)
    let response = axios.get(`https://localhost:44340/api/Note/${obj.userid}`,obj,headersConfig)
    return response
}

export const addNote = (obj) =>{
    console.log(obj)
    let response = axios.post("https://localhost:44340/api/Note/Add",obj, headersConfig)
    return response
}
export const updateArchiveNotes = (obj) =>{
    let response = axios.put(`https://localhost:44340/api/Note/${obj.noteid}/IsArchive`,obj, headersConfig)
    return response
}
export const updatePinNotes = (obj) =>{
    let response = axios.put(`https://localhost:44340/api/Note/${obj.noteid}/IsPin`,obj, headersConfig)
    return response
}
export const updateTrashNotes = (obj) =>{
    console.log(obj)
    let response = axios.put(`https://localhost:44340/api/Note/${obj.noteID}/IsTrash`,obj, headersConfig)
    return response
}

export const updateColor = (obj) =>{
    let response = axios.put(`https://localhost:44340/api/Note/${obj.noteid}/Color?color=${obj.color}`,obj, headersConfig)
    return response
}

export const updateTrash = (obj) =>{
    let response = axios.put(`https://localhost:44340/api/Note/${obj.noteid}/IsTrash`,obj, headersConfig)
    return response
}
