import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    navContainer: {
        display:'flex',
    },
  });

const listitems = [
    { 
        text:"Home",
        id:1,
        url:"http://www.google.com"
    },
    { 
        text:"Horses",
        id:2,
        url:"http://www.google.com"
    },
    { 
        text:"Staff",
        id:3,
        url:"http://www.google.com"
    },
    { 
        text:"Info",
        id:4,
        url:"http://www.google.com"
    },
    { 
        text:"Contact",
        id:5,
        url:"http://www.google.com"
    }
];

const MainNavigation = () => {
    const classes = useStyles();
    return (
        <div>
            <List component="nav" className={classes.navContainer}>
                {listitems.map(item => (
                    <ListItem key={item.id}>
                        <ListItemText>
                            <Typography>
                                {item.text}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );

}

export default MainNavigation;