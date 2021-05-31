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
            <TextField placeholder="Search Song/Artist Name" fullWidth margin="normal" variant="outlined" onChange={(e)=>{handleSearch(e)}}></TextField>
        </Grid>
    )
}

export default SearchBar
