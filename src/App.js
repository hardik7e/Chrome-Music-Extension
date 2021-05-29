import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar'
import { Grid } from '@material-ui/core';
import Playlist from './Components/Playlist/Playlist'

function App() {
  return (
    <Grid style={{padding:'10px'}} >
      <SearchBar/>
      <Playlist/>
    </Grid>
  );
}

export default App;
