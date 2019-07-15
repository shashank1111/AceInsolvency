import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  appHeader: {
    position: 'fixed',
    top: '0',
    left: '0',
    background: 'rgba(0,0,0,0.4)',
    width: '100%',
    zIndex: '1',
  },
  pullLeft: {
    display: 'inline-block',
    verticalAlign: 'top',
    '& a': {
      padding: '10px 20px 5px 20px',
    },
  },
  pullRight: {
    display: 'inline-block',
    verticalAlign: 'top',
    float: 'right',
  },
  appLogo: {
    display: 'inline-block',
    width: '70px',
    height: '60px',
    margin: '0px 40px 0px 40px;',
    borderRadius: '6px',
    background: "url('images/logo-ace.png') no-repeat",
    backgroundSize: '100% 100%',
  },
  items: {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#F2F2EF',
    '&:hover': {
      color: '#ffffff',
      textDecoration: 'none',
    },
  },
  headerLinkSection: {
    margin: '19px 12px 0 12px',
    float: 'right',
    '& a': {
      color: '#ffffff',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
        color: 'burlywood',
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.appHeader}>
      <div className="cntnr">
        <div className={classes.pullLeft}>
          <NavLink to="/" className={classes.items} color="inherit">
            <div className={classes.appLogo} />
          </NavLink>
        </div>
        <div className={classes.pullRight}>
          <div className={classes.headerLinkSection}>
            <div className="">
              <NavLink to="/about" className={classes.items} color="inherit">
                About Us
              </NavLink>
              <NavLink
                to="/claimFiling"
                className={classes.items}
                color="inherit"
              >
                Claim Filing
              </NavLink>
              <NavLink
                to="/cirpSupportServices"
                className={classes.items}
                color="inherit"
              >
                CIRP Support Services
              </NavLink>
              <NavLink
                to="/contactUs"
                className={classes.items}
                color="inherit"
              >
                Contact us
              </NavLink>
              {/* <NavLink href={dudUrl} className={classes.items} color="inherit">
                Important Orders
              </NavLink> */}
              {/* <NavLink href={dudUrl} className={classes.items} color="inherit">
                Query
              </NavLink> */}
              {/* <NavLink href={dudUrl} className={classes.items} color="inherit">
                New & Updates
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
