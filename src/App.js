import React from 'react';
import './App.css'; 
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            Material UI Example
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Button color="primary">Button</Button>
    </div>
  );
}

export default App;
