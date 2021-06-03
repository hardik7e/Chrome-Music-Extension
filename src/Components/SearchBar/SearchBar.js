import React, { useState } from 'react'
import {Grid, TextField} from '@material-ui/core'
import getMusic from './../../Api/Api'

function SearchBar() {

    const [search,setSearch] = useState("")
    const [searchResult,setSearchResult] = useState([])
    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
        getMusic(text=search).then(console.log(res)).catch(err=>console.log(err))
    }

    return (
        <Grid container>
<<<<<<< HEAD
            <TextField placeholder="Search Song by Artist Name" fullWidth margin="normal" variant="outlined"></TextField>
=======
            <TextField placeholder="Search Song/Artist Name" fullWidth margin="normal" variant="outlined" onChange={(e)=>{handleSearch(e)}}></TextField>
>>>>>>> db34646f16fbe5173e7bec195404c52411bf7e7c
        </Grid>
    )
}

export default SearchBar
