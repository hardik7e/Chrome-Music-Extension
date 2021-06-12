import axios from "axios"
import dotenv from "dotenv"
dotenv.config();

const API_KEY = process.env.YT_api;
// Youtube Search API
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
    console.log(API_KEY)
    return axios.request(options)
};


//


