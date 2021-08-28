import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';
import { getMusic, getPlaylistItems } from './../../apis/Search';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import image from '../GenreList/image.jpg'
import _ from 'lodash';



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
    height:250,
    padding: '5px '
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  divtag:{
    display: 'flex',
    margin: '0px',
    padding:'3px 10px',
    width:'100%',
    height:30,
    fontWeight:'bold',
    fontSize:'20px'
  },
  
  
  
}));

 
export default function PlayListMapped(props) {
  const classes = useStyles();
    
    return (
      <div className={classes.root}>
  
        <div className={classes.divtag}>
          <IconButton  style={{ height:'40%',width:'8%'}}
            onClick={props.ClosePlaylist}>
            <ArrowBackIcon />
          </IconButton> 

          <div>{props.SelectedPlayList.genreTitle}</div>
        </div>
        
        <GridList cellHeight={72} spacing={15}  cols={3} className={classes.gridList}  >
          {
            props.SelectedPlayList.playlists.map(val => {
              // cons ole.log(val.playlistId,":",val.playlistTitle);
              return (
                <GridListTile key={val.playlistId} onClick={()=>{props.handlePlaylistItem(val.playlistId)}}>
                  <img src={image} alt={val.playlistTitle} />
                  <GridListTileBar 
                    title={val.playlistTitle}
                  />
                </GridListTile>
              )
            })
          }
        </GridList>
      </div>
    )
};
