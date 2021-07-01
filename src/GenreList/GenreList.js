import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import genre_data from '../Assets/playlist_reducer';
import _ from 'lodash';



//SINGLE LINE GRID LIST

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0.2,0,0.7) 0%, rgba(0,0,0.7,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  listSubHeaderRoot: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '15px',
    
    /* To change the font, use the fontFamily rule */
  },
}));




export default function GenreList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* TITLE OF THE GRIDLIST */}
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto'}}>
          <ListSubheader component="div" classes={{root:classes.listSubHeaderRoot}}>Explore Genre List</ListSubheader>
        </GridListTile>
      </GridList>

      {/* BODY OF THE GRIDLIST ////genres/thumbs/ */}
      <GridList className={classes.gridList} cols={6.5}>
        {_.map(genre_data,(val) => (
          <GridListTile key={val.genreTitle}>
            <img src={`/images/genres/thumbs/${val.genreSlug}.png`} alt={val.genreTitle} />
            <GridListTileBar
              title={val.genreTitle}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${val.genreTitle}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

    </div>
  );
}
