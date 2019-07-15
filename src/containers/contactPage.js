import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Geolocation from '../components/body/geolocation';

const useStyles = makeStyles(theme => ({
  contactUs: {
    padding: '70px 0',
    backgroundColor: '#e3dfdb',
    width: '100%',
  },
  wrapper: {
    maxWidth: '1280px',
    padding: '20px 0',
    margin: '0px auto',
  },
  head: {
    textAlign: 'center',
    padding: '20px  50px 0 50px',
    fontSize: '40px',
    color: '#005153',
    fontFamily: 'monospace',
    margin: '0',
  },
  description: {
    width: '90%',
    textAlign: 'center',
    color: '#005153',
    fontSize: '20px',
    margin: '0 auto 60px auto',
  },
  imageArea: {
    width: '100%',
    height: '200px',
    borderRadius: '4px',
  },
  detailsArea: {
    width: '100%',
    padding: '0',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    padding: '20px',
    '& h4': {
      textAlign: 'center',
      fontSize: '18px',
    },
  },
  item: {
    textAlign: 'left',
  },
  ul: {
    textAlign: 'left',
  },
  innerImg: {
    width: '100%',
    borderRadius: '4px',
  },
  blocks: {
    margin: '40px 0',
  },
}));

export default function ContactUsPage() {
  const classes = useStyles();
  return (
    <div className={classes.contactUs}>
      <div className={classes.wrapper}>
        <h1 className={classes.head}>Contact Us</h1>
        <p className={classes.description}>Lets sit over a Coffee</p>
        <div className={classes.detailsArea}>
          <Grid container spacing={2} className={classes.blocks}>
            <Grid item xs={4}>
              <img
                alt="coffee"
                src="images/coffee.jpg"
                className={classes.innerImg}
              />
            </Grid>

            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <b>
                  <p>Registered Office:</p>
                </b>
                <p>
                  D-290, Vivek Vihar, Phase-1, Ground Floor, Delhi-110095, India
                </p>
                <p>Phone Number: 011-42424644</p>
                <p>Mobile: 9953633307</p>
                <p>Email ID: AceInsolvency@gmail.com</p>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.blocks}>
            <Geolocation />
          </Grid>
        </div>
      </div>
    </div>
  );
}
