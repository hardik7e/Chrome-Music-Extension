import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from './image.jpg'
import _ from 'lodash';

import genre_data from '../Assets/playlist_reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    justifyContent : 'space-between'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  divtag:{
    margin: '0px',
    padding:'0px 10px',
    width:'100%',
    height:50,
  },
  
  
}));

 
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className={classes.divtag}><h3>Explore GenreList</h3></div>

      <GridList cellHeight={80} spacing={30}  cols={3}  >
        
        {_.map(genre_data,(val) => (
          <GridListTile key={val.genreTitle}  >
            <img src={`/images/genres/thumbs/${val.genreSlug}.png`} alt={val.genreTitle} />
            <GridListTileBar
              title={val.genreTitle}
              actionIcon={
                <IconButton aria-label={`info about ${val.genreTitle}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
