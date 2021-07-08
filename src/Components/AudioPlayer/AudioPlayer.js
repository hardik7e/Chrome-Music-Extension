import React, { useEffect, useRef, useState } from 'react'
import PlayCircleOn from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOff from '@material-ui/icons/PauseCircleOutline'
import { Button, Grid, IconButton, Slider, withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext'
import music1 from '../../Music/vaaste.mp3'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import { VolumeDown } from '@material-ui/icons';
import { makeStyles, rgbToHex, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:10,
  },
  details: {
    display: 'flex',
    width:325,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function AudioPlayer({ music }) {
  const classes = useStyles();
  const theme = useTheme();
  // const [{id, name, author_name, img, musicName}, setCurrTrack] = useState(music);
  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [bannerToggle, setBannerToggle] = useState(false);
  const pointer = { cursor: "pointer" };
  const OnClickPlayAudioHandler = () => {
    setPlayPauseClicked(!isPlaying)
  }
  const OnClickPreviousAudioHandler = () => {
    setPlayPauseClicked(!isPlaying)
  }
  const OnClickNextAudioHandler = () => {
    setPlayPauseClicked(!isPlaying)
  }


  const audioElement = useRef();
  const handleSeekChange = (event, newValue) => {
    audioElement.current.currentTime = (newValue * duration) / 100;
    setSeekTime(newValue)
  };
  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  // useEffect(() => {
  //   setCurrTrack(music);
  // }, [music]);


  useEffect(() => {
    setSeekTime((currTime) / (duration / 100))
  }, [currTime, duration]);


  useEffect(() => {
    audioElement.current.onended = () => {
      setNextClicked(true);
    };
  })

  const handleVolume = () => {
    setVolumeClicked(!isVolumeClicked)
  }

  function formatTime(secs) {
    const t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    let s = t.toTimeString().substr(0, 8);
    if (secs > 86399)
      s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
    return s.substring(3);
  }
  useEffect(() => {
    isPlaying
      ? audioElement.current.play().then(() => { }).catch((e) => { audioElement.current.pause(); audioElement.current.currentTime = 0; })
      : audioElement.current.pause();
    audioElement.current.loop = isRepeatClicked;
    audioElement.current.volume = volume / 100;
    audioElement.current.muted = isVolumeClicked;
    audioElement.current.onloadeddata = () => {
      if (audioElement.current != null)
        setDuration(audioElement.current.duration)
    };
    setInterval(() => {
      if (audioElement.current !== null)
        setCurrTime(audioElement.current.currentTime);
    })
  });

  // const res = await getAudioLink.get('/song', {
  //   params: { id: data },
  // });
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <Grid container direction="row" justify="center" alignContent="center" alignItems="normal">
          <Grid item xs={2}><Paper style={{backgroundColor:'#bebebe', textAlign:'center'}}>{formatTime(currTime)}</Paper></Grid>
          <Grid item xs={7} style={{paddingLeft:10, paddingRight:10}}>
            {
              !isNaN(seekTime) &&
              <Slider defaultValue={20} style={{ width: '100%', color: "black" }}
                className={"playback-completed"}
                value={seekTime} onChange={handleSeekChange} />
            }
          </Grid>
          <Grid item xs={2}><Paper style={{backgroundColor:'#bebebe', textAlign:'center'}}>{formatTime(duration)}</Paper></Grid>
        </Grid>
        <div className={classes.controls}>
          <IconButton aria-label="previous" onClick={OnClickPreviousAudioHandler}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <audio ref={audioElement} src={music1} preload={"metadata"} />
          <IconButton aria-label="play/pause" onClick={OnClickPlayAudioHandler}>
            {(!isPlaying) ? <PlayCircleOn className={classes.playIcon} /> : <PlayCircleOff className={classes.playIcon} />}
          </IconButton>
          <IconButton aria-label="next" onClick={OnClickNextAudioHandler}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        <Grid container direction="row" justify="center" spacing={3} alignItems="center">
          <Slider style={{ width: '100px' }} color="inherit" value={volume} onChange={handleVolumeChange} />
          <IconButton color="inherit" onClick={handleVolume}>{(!isVolumeClicked) ? <VolumeUpIcon /> : <VolumeOffIcon />}</IconButton>
        </Grid>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image='https://material-ui.com/static/images/cards/live-from-space.jpg'
        title="Live from space album cover"
      />
    </Card>
  )
}

export default AudioPlayer
