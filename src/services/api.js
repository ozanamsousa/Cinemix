import axios from "axios";

// Base URL: https:/api.themoviedb.org/3/
// URL: /movie/now_paying?api_key=721cd5aa59c4d8eec94b75f4f8b6c6ac&language=pt-BR


//curl --request GET \
     //--url 'https://api.themoviedb.org/3/movie/343611?api_key=721cd5aa59c4d8eec94b75f4f8b6c6ac'
     
const api = axios.create({
    baseURL:'https:/api.themoviedb.org/3/'
})

export default api;
