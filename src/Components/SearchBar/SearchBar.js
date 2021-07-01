import React, { useEffect, useState } from 'react'
import { Grid, makeStyles, TextField } from '@material-ui/core'
import _ from 'lodash';
import { getMusic, getPlaylistItems } from './../../apis/Search'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import genre from '../../Assets/playlist_reducer';
import { List } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import GenreList from '../../GenreList/GenreList';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '90vw',
        backgroundColor: theme.palette.background.paper,
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

    const [playlist_selected,setPleaylist_selected] = useState("");
    const [isPlaylistSelected,setIsPlayelistSelected] = useState(false);
    const [search, setSearch] = useState("")
    const [isOpen, setisOpen] = useState(false)
    const [searchResult, setSearchResult] = useState(props.data.musicList)
    const [resetSearch, setresetSearch] = useState(false);
    const [songSelected, setsongSelected] = useState("");

    // handle Search Bar
    const handleSubmit = (e) => {
        e.preventDefault();
        (search && !resetSearch)?
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
                console.log("genre list :",genre);
            })
            .catch(err => console.log(err))
        :setisOpen(false);
        setresetSearch(false);
    }

    // Rednder All search elements
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

    // on click function for playlist
    const handlePlaylistSelect = (e)=>{
        setsongSelected(_.find(playlist_selected.playlists,{'playlistTitle':e.target.innerText}));
        console.log(songSelected);
        // getPlaylistItems({id:})
    }

    // on Click function for Genre
    const handleGenreSelect = (e)=>{
        setPleaylist_selected(_.find(genre,{'genreTitle':e.target.innerText}));
        console.log("selected Playlist :",playlist_selected);
        setIsPlayelistSelected(true);
    }

    // on click function to go back to genre list
    const closePlaylist = (e)=>{
        setIsPlayelistSelected(false);
        setresetSearch(true);
    }

    // Render Selected Playlist
    const playlist_mapped = _.map(playlist_selected.playlists,(val)=>{
        return(
            <ListItem onClick={(e)=>handlePlaylistSelect(e)}>
                <ListItemText primary={val.playlistTitle}/>
            </ListItem>
        )
    })

    // Render All Genre
    const genre_mapped = _.map(genre,(val)=>{
        return(
            <ListItem onClick={e=>handleGenreSelect(e)}>
                <ListItemText primary={val.genreTitle}/>
            </ListItem>
        )
    })

    // Render Songs of a selected playlist
    // const songs_mapped = _.map(songSelected,(val)=>{
    //     return(
    //         <ListItem>
    //             <ListItemText primary={}/>
    //         </ListItem>
    //     )
    // })

    return (
        <Grid container>
            <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
                <InputBase className={classes.input} placeholder="Search Song by Artist Name" fullWidth margin="normal" variant="outlined" onInput={e => setSearch(e.target.value)} autoFocus/>
                <IconButton  className={classes.iconButton} type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <IconButton  className={classes.iconButton} type="submit" aria-label="search">
                    <ArrowBackIosIcon onClick={e=>closePlaylist(e)}/>
                </IconButton>
            </Paper>
            {/* {(isOpen)?<Grid>{searchResultsMapped}</Grid>:(isPlaylistSelected)?<List>{playlist_mapped}</List>:<Grid item style={{position:'relative', left:'0px', top:'3px'}}><GenreList /></Grid>} */}
            {/* {(isOpen)?<Grid>{searchResultsMapped}</Grid>:(isPlaylistSelected)?<List>{playlist_mapped}</List>:<Grid item style={{position:'relative', left:'0px', top:'3px'}}><GenreList /></Grid>} */}
            {(isOpen)?
            <Paper style={{maxHeight: 300,margin:10, overflow: 'auto'}}>
                {searchResultsMapped}
            </Paper>:(isPlaylistSelected)?<List>{playlist_mapped}</List>:<List>{genre_mapped}</List>}
        </Grid>
    )
}

export default SearchBar
