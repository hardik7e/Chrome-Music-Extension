import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


import _ from 'lodash';



import genre_data from '../../Assets/playlist_reducer';
import PlayListMapped from '../Playlist/Playlist';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    justifyContent : 'space-between',
    height:250
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  divtag:{
    display: 'flex',
    margin: '0px',
    padding:'3px 10px 3px 10px',
    width:'100%',
    height:50,
    fontWeight:'bold'
  },
  
  
}));

 
export default function TitlebarGridList() {
  const classes = useStyles();

  const [playlist_selected,setPleaylist_selected] = useState("");
  const [isPlaylistSelected,setIsPlayelistSelected] = useState(false);

  const handleGenreSelect = (e)=>{
    setPleaylist_selected(_.find(genre_data,{'genreTitle':e.target.innerText}));
    console.log("selected Playlist :",playlist_selected);
    setIsPlayelistSelected(true);
}
const closePlaylist = (e)=>{
  setIsPlayelistSelected(false);
}


  return (
    
      <div>
        {(isPlaylistSelected)?
        <PlayListMapped SelectedPlayList={playlist_selected} ClosePlaylist={closePlaylist}/>
        :
        <div className={classes.root}>
          <div  className={classes.divtag}><h3>Explore GenreList</h3></div>
          <GridList cellHeight={72} spacing={15}  cols={3} className={classes.gridList} onClick={e=>handleGenreSelect(e)} >
          
          {_.map(genre_data,(val) => (
            <GridListTile key={val.genreTitle}  >
              <img src={`/images/genres/thumbs/${val.genreSlug}.png`} alt={val.genreTitle} />
              <GridListTileBar 
                title={val.genreTitle}
              />
            </GridListTile>
          ))}
          </GridList>
        </div>
      }
      </div>
  );
}
