import React, { useEffect, useRef, useState } from 'react'
import PlayCircleOn from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOff from '@material-ui/icons/PauseCircleOutline'
import { Button, Grid, IconButton, Slider, withStyles } from '@material-ui/core'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext'
import music1 from '../../Music/vaaste.mp3'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import { VolumeDown } from '@material-ui/icons';

function AudioPlayer({music}) {
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
  const [bannerToggle,setBannerToggle] = useState(false);
  const pointer = { cursor: "pointer"};
    const OnClickPlayAudioHandler = () =>{
        setPlayPauseClicked(!isPlaying)
    }
    const OnClickPreviousAudioHandler = () =>{
        setPlayPauseClicked(!isPlaying)
    }
    const OnClickNextAudioHandler = () =>{
        setPlayPauseClicked(!isPlaying)
    }


    const audioElement = useRef();
    const handleSeekChange = (event, newValue) => {
      audioElement.current.currentTime =(newValue*duration)/100;
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
  
  
  
  useEffect(()=>{
    audioElement.current.onended = ()=> {
        setNextClicked(true);
    };
  })

  const handleVolume = () =>{
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
        ? audioElement.current.play().then(()=>{}).catch((e)=>{audioElement.current.pause(); audioElement.current.currentTime=0;})
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
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
    return (
      <Grid container directiob="row" justify="space-between" alignItems="center" style={{padding:'10px'}}>
        <Grid container direction ="row" justify="space-between" alignItems="center">
        <span>{formatTime(currTime)}</span>
                {
                    !isNaN(seekTime) &&
                    <Slider defaultValue={20} style={{width:'90vw',color:"black"}} 
                            className={"playback-completed"}
                            value={seekTime} onChange={handleSeekChange}/>
                }
                <span>{formatTime(duration)}</span>
            </Grid>
        <Grid item container direction="row" justify="center" spacing={3} alignItems="center" spacing={3}> 
            <IconButton style={{height:'50px',width:'50px'}} color="inherit" onClick={OnClickPreviousAudioHandler}>
              <SkipPreviousIcon style={{height:'30px',width:'30px'}}/>
            </IconButton>

            <audio ref={audioElement} src={music1} preload={"metadata"}/>

            <IconButton color="inherit" onClick={OnClickPlayAudioHandler}>
              {(!isPlaying)?<PlayCircleOn style={{height:'60px',width:'60px'}}/>:<PlayCircleOff style={{height:'60px',width:'60px'}}/>}
            </IconButton>

            <IconButton  style={{height:'50px',width:'50px'}}color="inherit" onClick={OnClickNextAudioHandler}> 
              <SkipNextIcon style={{height:'30px',width:'30px'}}/>
            </IconButton>
            <Slider style={{width:'125px'}} color="inherit" value={volume} onChange={handleVolumeChange}/>
            <IconButton color="inherit" onClick={handleVolume}>{(!isVolumeClicked)?<VolumeUpIcon />:<VolumeOffIcon/>}</IconButton>
        </Grid>
        </Grid>
    )
}

export default AudioPlayer
