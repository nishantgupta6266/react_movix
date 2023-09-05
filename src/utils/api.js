import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTk2N2M1NWI5MjE2OWE2OTY1M2UyYWU4YjNkOGY0YyIsInN1YiI6IjY0ZGVmMTFmZTE5ZGU5MDBhZGZjMzAyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T2lvFbt9zVXAdQKL7YobveE_N67lUymzxGcB_iq-gMU";

const headers = {
    Authorization: "bearer " + TMBD_TOKEN,
}
 
export const fetchDataFromApi = async (url,params)=>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }catch(err){
        console.log(err);
    }
}