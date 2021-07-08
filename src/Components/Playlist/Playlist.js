import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import React, { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

  // function generate(element) {
  //   return props.data.musicList.map((value) =>
  //     React.cloneElement(element, {
  //       key: value,
  //     }),
  //   );
  // }
function Playlist(props) {
  useEffect(()=>{
    return <Playlist/>
  },[])
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);    
    return (
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

export default Playlist
