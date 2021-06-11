import React, { useState } from 'react'
import {Grid, TextField} from '@material-ui/core'
import {getMusic} from './../../apis/Search'

function SearchBar() {

    const [search,setSearch] = useState("")
    const [videosId,setVideosId] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        getMusic({text:search,count:10,type:'video'})
        .then(res=> {
            // console.log(res.data.items);
            const searchResult = res.data.items;
            setVideosId([]);
            searchResult.forEach(element => {
                videosId.push(element.id.videoId);
            });
            console.log(videosId);
        })
        .catch(err=>console.log(err))

        // console.log(searchResult)
    }

    return (
        <Grid container>
            <form  onSubmit={handleSubmit} >
            <TextField placeholder="Search Song by Artist Name" fullWidth margin="normal" variant="outlined" onInput={e => setSearch(e.target.value)}></TextField>
            <input type="submit" value="Submit" />
            </form>
            
        </Grid>
    )
}

export default SearchBar
