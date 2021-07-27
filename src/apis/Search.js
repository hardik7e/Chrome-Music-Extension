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
};

// YT to mp3 converter
export const convertsongMP3 = (props)=>{
    const options = {
        method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {id: props.id},
  headers: {
    'x-rapidapi-key': '761269125fmshada5d7657d1f932p1a5416jsnf5e641d2e614',
    'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
  }
      };
    return axios.request(options);
};

