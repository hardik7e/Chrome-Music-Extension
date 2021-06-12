import React, { useState } from 'react'
import { Grid, makeStyles, TextField } from '@material-ui/core'
import { getMusic } from './../../apis/Search'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '94.5vw',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
  }));

function SearchBar() {
    const classes = useStyles();

    const [search, setSearch] = useState("")
    const [videosId, setVideosId] = useState([])
    const [searchResult, setSearchResult] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        getMusic({ text: search, count: 10, type: 'video' })
            .then(res => {
                // console.log(res.data.items);
                const data = res.data.items;
                setVideosId([]);
                setSearchResult([]);
                data.forEach(element => {
                    searchResult.push(element);
                });
                // console.log(videosId);
                console.log(searchResult);
            })
            .catch(err => console.log(err))

        // console.log(searchResult)
    }

    return (
        <Grid container>
            {/* <form onSubmit={handleSubmit}>
                <TextField placeholder="Search Song by Artist Name" fullWidth margin="normal" variant="outlined" onInput={e => setSearch(e.target.value)}></TextField>
                <input type="submit" value="Submit" />
            </form> */}
            <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
                <InputBase className={classes.input} placeholder="Search Song by Artist Name" fullWidth margin="normal" variant="outlined" onInput={e => setSearch(e.target.value)} autoFocus/>
                <IconButton  className={classes.iconButton} type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Grid>
    )
}

export default SearchBar
