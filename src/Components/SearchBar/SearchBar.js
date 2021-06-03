import React, { useState } from 'react'
import {Grid, TextField} from '@material-ui/core'
import {getMusic} from './../../Api/Api'

function SearchBar() {

    const [search,setSearch] = useState("")
    const [searchResult,setSearchResult] = useState([])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        // console.log(search)
        getMusic({text:search})
        .then(res=>setSearchResult(res.hints))
        .catch(err=>console.log(err))

        // console.log(searchResult)
    }

    return (
        <Grid container>
            <TextField placeholder="Search Song by Artist Name" fullWidth margin="normal" variant="outlined"></TextField>
        </Grid>
    )
}

export default SearchBar
