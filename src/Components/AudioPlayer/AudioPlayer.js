import React, { useState } from 'react'
import PlayCircleOn from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOff from '@material-ui/icons/PauseCircleOutline'
import { Button, Grid, IconButton } from '@material-ui/core'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

function AudioPlayer() {
    const [audioActive, setaudioActive] = useState(false)
    const OnClickPlayAudioHandler = () =>{
        setaudioActive(!audioActive)
    }
    const OnClickPreviousAudioHandler = () =>{
        setaudioActive(!audioActive)
    }
    const OnClickNextAudioHandler = () =>{
        setaudioActive(!audioActive)
    }
    return (
        <Grid container direction="row" justify="center" spacing={3} alignItems="center">
            <IconButton style={{height:'50px',width:'50px'}} color="inherit" onClick={OnClickPreviousAudioHandler}><SkipPreviousIcon style={{height:'30px',width:'30px'}}/></IconButton>
            <IconButton color="inherit" onClick={OnClickPlayAudioHandler}>{(audioActive)?<PlayCircleOn style={{height:'60px',width:'60px'}}/>:<PlayCircleOff style={{height:'60px',width:'60px'}}/>}</IconButton>
            <IconButton  style={{height:'50px',width:'50px'}}color="inherit" onClick={OnClickNextAudioHandler}> <SkipNextIcon style={{height:'30px',width:'30px'}}/></IconButton>
        </Grid>
    )
}

export default AudioPlayer
