import React from 'react'
import {Grid, TextField} from '@material-ui/core'

function SearchBar() {
    return (
        <Grid container>
            <TextField placeholder="Search Song by Artist Name" fullWidth margin="normal" variant="outlined"></TextField>
        </Grid>
    )
}

export default SearchBar
