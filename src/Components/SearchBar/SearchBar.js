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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import GenreList from '../GenreList/GenreList';
import { convertsongMP3 } from '../../apis/Search';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px 10px 0px 10px',
        padding: '2px 4px 0px 4px',
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

    const [search, setSearch] = useState("")
    const [isOpen, setisOpen] = useState(false)
    const [searchResult, setSearchResult] = useState(props.data.musicList)
    const [resetSearch, setresetSearch] = useState(false);
    const [songSelected, setsongSelected] = useState("");
    const [song,setSong] = useState("");
    const [songurl, setSongurl] = useState("");
    
    const handlePlaylistItem = (playlistId) => {
        console.log(playlistId);
        getPlaylistItems({id:playlistId,count:8}).then(res =>{
          const data = res.data.items;
          const arr = []
          data.forEach(element => {
            arr.push(element);
          });
          setSearchResult(arr);
          setisOpen(true);
        })
        .catch(err => {
          alert("Check your network connection!")
          console.log(err)})
      }

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
                // console.log(arr);
                // console.log("genre list :",genre);
            })
            .catch(err => {
                alert("Check your network connection!")
                console.log(err)})
        :setisOpen(false);
        setresetSearch(false);
    }

    // Handle Song url function
    const handleSongUrl = (value) =>{
        let videoId = value.id.videoId;
        if(videoId === undefined){
            videoId = value.snippet.resourceId.videoId;
        }
        console.log(videoId);
        convertsongMP3({id:videoId})
      .then(res=>{setSongurl(res.data.link)})
      .catch(err=>console.log("error in converting video to mp3: ",err))
    }

    // Rednder All search elements
    const searchResultsMapped = searchResult.map((value) => {
       return ( 
            <ListItem onClick={()=>{setSong(value);handleSongUrl(value);}} >
                <ListItemAvatar style={{cursor: 'pointer'}}>
                    <Avatar>
                        <img src={value.snippet.thumbnails.default.url} altsrc="" />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={value.snippet.title}
                    style={{cursor: 'pointer'}}
                />
            </ListItem>
    )})

    // on click function to go back to genre list
    const closePlaylist = (e)=>{
        setresetSearch(true);
    }

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
            
            
            {(isOpen)?
                <Paper style={{maxHeight: 300,width:'100%',margin:10, overflow: 'auto'}}>{searchResultsMapped}</Paper>
                :<Grid item style={{position:'relative', left:'0px', top:'3px'}}><GenreList handlePlaylistItem={handlePlaylistItem}/></Grid>}
            <Grid item style={{position:'absolute', left:'0px', bottom:'0px'}}><AudioPlayer song={song} songurl={songurl}/></Grid>

        </Grid>
    )
}

export default SearchBar
