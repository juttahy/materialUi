import React from 'react';
import './App.css';
import Appbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import MainNavigation from './Components/MainNavigation';
import Posts from './Components/Posts';
import Footer from './Components/Footer';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding:25,
    backgroundImage: "linear-gradient(to right, #4f1543, #762060, #a12b7d, #cf3699, #ff40b5)"
  },
  title: {
    flexGrow: 1
  },
  icon: {
    marginRight:10
}
});

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Appbar className={classes.root}>
        <Toolbar>
          <FavoriteBorderIcon className={classes.icon} />
          <Typography className={classes.title} variant="h5">Horses</Typography>
          <MainNavigation></MainNavigation>
        </Toolbar>
      </Appbar>
      <Posts></Posts>
      <Footer />
    </div>
  );
}

export default App;

