import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

const styles = theme => {
  return {
    grid: {
      width: '100%',
      padding: '60px 0',
      margin: '0px auto',
      position: 'relative',
    },
    link: {
      color: '#fff',
      display: 'block',
      textDecoration: 'none',
      padding: '0 0 5px 0',
    },
    footerWrapper: {
      background: "url('images/banner-11.jpg') no-repeat",
      backgroundSize: '100% 100%',
      color: '#fff',
      height: '300px',
    },
    title: {
      fontSize: '20px',
      color: '#fff',
      textDecoration: 'none',
    },
    copyright: {
      fontSize: '14px',
      fontWeight: 'normal',
      opacity: '0.8',
      padding: '40px 0',
      position: 'absolute',
      bottom: '0',
      letterSpacing: '2px',
    },
  };
};

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.footerWrapper}>
        <Grid item className={classes.grid} xs={3}>
          <h3 className={classes.title}>Go To</h3>
          <NavLink to="/about" className={classes.link} color="inherit">
            About Us
          </NavLink>
          <NavLink to="/claimFiling" className={classes.link} color="inherit">
            Claim Filing
          </NavLink>
          <NavLink
            to="/cirpSupportServices"
            className={classes.link}
            color="inherit"
          >
            CIRP Support Services
          </NavLink>
          <NavLink to="/contactUs" className={classes.link} color="inherit">
            Contact us
          </NavLink>
        </Grid>
        <Grid item className={classes.grid} xs={3}>
          <h3 className={classes.title}>Connect</h3>
          <a
            href="https://www.facebook.com/AceInsolvency/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            color="inherit"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/aceisolvency/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            color="inherit"
          >
            LinkedIn
          </a>
        </Grid>
        <Grid item className={classes.grid} xs={3}>
          <h3 className={classes.copyright}>
            Copyrights Ace Inhibitors Insolvency
          </h3>
        </Grid>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(Footer);
