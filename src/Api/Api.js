import axios from "axios"

// search music api from shazam rapidApi with auto complete
export const getMusic = (props) =>{
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/auto-complete',
        params: {term: `${props.text}`, locale: 'en-US'},
        headers: {
          'x-rapidapi-key': '6f4564d26fmsh5e051f2d70a23cfp116ffdjsn37837cd3f9e5',
          'x-rapidapi-host': 'shazam.p.rapidapi.com'
        }
    };
    return axios.request(options)
    .then(res=>res.data)
    .catch(err=>console.log(err))
};