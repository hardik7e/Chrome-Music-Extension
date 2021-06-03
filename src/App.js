import './App.css';
import SearchBar from './Components/SearchBar/SearchBar'
import { Grid } from '@material-ui/core';
import Playlist from './Components/Playlist/Playlist'
import AudioPlayer from './Components/AudioPlayer/AudioPlayer'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


function App() {
  return (
    <Grid container direction="column" style={{padding:'10px'}} justify="space-between">
        <SearchBar/>
        <Playlist/>
        <AudioPlayer/>
    </Grid>
  );
}

export default App;
