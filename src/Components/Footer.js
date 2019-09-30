import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';
// import { flexbox, borderRadius } from '@material-ui/system';
// import { Typography } from '@material-ui/core';

import MainNavigation from './MainNavigation';

const useStyles = makeStyles({
    gridContainer: {
        backgroundColor:"#4F4F4F",
        padding:10,
        color:"white"
    },
    formContainer: {
      background:"#F9DBF4",
      padding:20,
      borderRadius:10,
      margin:10,
      color:"black"
    },
    formControl: {
        margin:"20px 0",
        display:"block"
    }
  });

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.gridContainer}>
                <Grid item xs={6}>
                    <MainNavigation />
                </Grid>
                <Grid item xs={6}>
                    <form className={classes.formContainer}>
                        <h3>Contact us</h3>
                        <TextField fullWidth label="Name" margin="normal" variant="outlined"></TextField>
                        <TextField fullWidth label="Email" type="email" margin="normal" variant="outlined" required></TextField>
                        <TextField fullWidth label="Phone" type="phone" margin="normal" variant="outlined" required></TextField>
                        <TextField fullWidth label="Message" margin="normal" variant="outlined"></TextField>

                        <FormControl className={classes.formControl}>
                            <FormLabel component="legend">Tell your gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel>Subscription</FormLabel>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Subscribe to newsletter" />
                                <FormControlLabel control={<Checkbox />} label="Send me coupon codes" />
                            </FormGroup>
                        </FormControl>
                        <Button variant="contained" color="default">Submit</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
} 

export default Footer;