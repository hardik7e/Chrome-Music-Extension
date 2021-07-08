import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';


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
<<<<<<< HEAD
        <div className={classes.demo}>
            <List dense={dense}>
              {
                props.data.musicList.map((value)=>(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={value.snippet.title}
                      secondary={secondary ? `${value.snippet.artist}` : null}
                    />
                  </ListItem>
                ))
              }
            </List>
          </div>
    )
}
=======
      <div className={classes.root}>
  
        <div className={classes.divtag}>
          <IconButton  style={{ height:'40%',width:'8%'}}
            onClick={props.ClosePlaylist}>
            <ArrowBackIcon />
          </IconButton> 
>>>>>>> 1f5134c1b3d704d7944360ba4f8bb02d137d2b93

          <div>{props.SelectedPlayList.genreTitle}</div>
        </div>
        
        <GridList cellHeight={72} spacing={15}  cols={3} className={classes.gridList}  >
          
          {_.map(props.SelectedPlayList.playlists,(val) => (
            <GridListTile key={val.playlistTitle}  >
              <img src={image} alt={val.playlistTitle} />
              <GridListTileBar 
                title={val.playlistTitle}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
};
