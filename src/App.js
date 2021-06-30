import './App.css';
import SearchBar from './Components/SearchBar/SearchBar'
import { Grid } from '@material-ui/core';
import Playlist from './Components/Playlist/Playlist'
import AudioPlayer from './Components/AudioPlayer/AudioPlayer'
import react, {useState} from 'react'

function App() {
  const data = {
    musicList:[],
  };
  return (
    <div style={{minWidth:'500px',minHeight:'500px',flexGrow:'1'}}>
      <Grid container direction="row" style={{padding:'10px',height:'100vh'}} justify="space-between" >
          <Grid item style={{position:'relative', left:'0px', top:'0px'}}><SearchBar data={data}/></Grid>
          <Grid item style={{position:'relative', left:'0px', top:'3px'}}><Playlist data={data}/></Grid>
          <Grid item style={{position:'absolute', left:'0px', bottom:'0px'}}><AudioPlayer/></Grid>
      </Grid>
    </div>
  );
}

export default App;
