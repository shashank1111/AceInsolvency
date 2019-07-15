import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  main: {
    width: '100vw',
    height: '100vh',
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  servicesArea: {
    marginBottom: '90px',
  },
  card: {
    width: '25%',
    backgroundColor: 'white',
    webkitBoxShadow: '10px 10px 23px 0px rgba(0,0,0,0.14)',
    mozBoxShadow: '10px 10px 23px 0px rgba(0,0,0,0.14)',
    boxShadow: '10px 10px 23px 0px rgba(0,0,0,0.14)',
    margin: 'auto',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    height: '360px',
    display: 'inline-block',
    transform: 'scale(.9)',
    transition: 'all .2s',
    borderRadius: '50%',
    color: '#005153',
    background: "url('images/banner-3.jpg') no-repeat",
    backgroundSize: '100% 100%',

    '&:hover': {
      transform: 'scale(.95)',
      transition: 'all .2s',
      borderRadius: '10px',
      fontSize: '20px',
    },
    overflow: 'hidden',
  },
  heading: {
    textAlign: 'center',
    margin: '50px auto',
    fontSize: '40px',
    color: '#005153',
    fontFamily: 'monospace',
  },

  cardMid: {
    height: 'auto',
    padding: '250px 10px 20px 10px',
    borderBottomLeftRadius: '10px',
    overflow: 'hidden',
    borderBottomRightRadius: '10px',
    transition: 'all .2s',
    '&:hover': {
      padding: '20px 0 250px 0;',
      background: 'rgba(255,255,255,0.38)',
    },

    '& h2': {
      width: '100%',
      fontSize: '24x',
      marginBottom: '10px',
      background: 'rgba(255,255,255,0.58)',
    },
    '& label': {
      margin: '0',
      display: 'block',
      width: '100%',
      overflow: 'hidden',
      fontSize: '18px',
      textOverflow: 'ellipsis',
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.servicesArea}>
      <h1 className={classes.heading}>Specialized Services For</h1>
      <main id={classes.main}>
        <div className={classes.card}>
          <div className={classes.cardMid}>
            <h2 className={classes.cardTitle}>Creditors/ claimants</h2>
            <label className={classes.cardDesc}>Description</label>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardMid}>
            <h2 className={classes.cardTitle}>Corporate Debtor</h2>
            <label className={classes.cardDesc}>Description</label>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardMid}>
            <h2 className={classes.cardTitle}>Resolution Applicants</h2>
            <label className={classes.cardDesc}>Description</label>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardMid}>
            <h2 className={classes.cardTitle}>Insolvency Professionals</h2>
            <label className={classes.cardDesc}>Description</label>
          </div>
        </div>
      </main>
    </div>
  );
}
