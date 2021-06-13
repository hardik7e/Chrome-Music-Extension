import React, { useEffect, useState } from 'react'
import { Grid, makeStyles, TextField } from '@material-ui/core'
import { getMusic } from './../../apis/Search'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

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

function SearchBar(props) {
    const classes = useStyles();

    const [search, setSearch] = useState("")
    const [isOpen, setisOpen] = useState(false)
    const [searchResult, setSearchResult] = useState(props.data.musicList)

    const handleSubmit = (e) => {
        e.preventDefault();
        getMusic({ text: search, count: 8, type: 'video' })
            .then(res => {
                
                const data = res.data.items;
                const arr = []
                data.forEach(element => {
                    arr.push(element);
                });
                setSearchResult(arr);
                setisOpen(true)
                console.log(searchResult);
            })
            .catch(err => console.log(err))
    }

    const searchResultsMapped = searchResult.map((value) => {
       return ( 
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img src={value.snippet.thumbnails.default.url} altsrc="" />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={value.snippet.title}
                />
            </ListItem>
    )})

    return (
        <Grid container>
            <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
                <InputBase className={classes.input} placeholder="Search Song by Artist Name" fullWidth margin="normal" variant="outlined" onInput={e => setSearch(e.target.value)} />
                <IconButton className={classes.iconButton} type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {(isOpen)?<Grid>{searchResultsMapped}</Grid>:''}
        </Grid>
    )
}

export default SearchBar
