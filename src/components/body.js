import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from './body/heroBanner';
import ClaimFiling from './body/claimFiling';
// import Geolocation from './body/geolocation';
import Services from './body/services';
//import QueryForm from './body/queryForm';
import Query from './body/query';

const useStyles = makeStyles(theme => ({
  appBody: {
    paddingTop: '0',
    backgroundColor: ' #e3dfdb',
  },
}));

export default function Body() {
  const classes = useStyles();
  return (
    <div className={classes.appBody}>
      <HeroBanner />
      <Services />
      <ClaimFiling heading="Claim Filing" />
      {/* <QueryForm /> */}
      <Query />
      {/* <Geolocation /> */}
    </div>
  );
}
