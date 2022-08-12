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
