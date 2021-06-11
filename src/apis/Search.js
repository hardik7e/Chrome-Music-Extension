import axios from "axios"
const API_KEY = 'AIzaSyDfAzpsHpLnA0KNThw94u025Yj3dVVsPYM';

export const getMusic = (props) =>{
    const options = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
            part: 'snippet',
            maxResults: props.count,
            key: API_KEY,
            q: props.text,
            type: props.type

        }
        
    };
    return axios.request(options)
};


//


