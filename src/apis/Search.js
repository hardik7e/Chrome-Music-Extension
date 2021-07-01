import axios from "axios"
import dotenv from "dotenv"
dotenv.config();

const API_KEY = process.env.REACT_APP_YT_KEY;
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
    return axios.request(options)
};


// Get Playlist Items
export const getPlaylistItems = (props) =>{
    const options = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/playlistItems',
        params:{
            part: 'snippet',
            maxResults: props.count,
            key: API_KEY,
            playlistId: props.id 
              
        }
    }
    return axios.request(options);
}


