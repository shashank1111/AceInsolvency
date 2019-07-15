import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    appHeader: {
      width: '100%',
    },
    mapouter: {
      position: 'relative',
      textAlign: 'right',
      height: '460px',
      width: '80%',
      margin: '0px auto',
    },
    gmapCanvas: {
      overflow: 'hidden',
      background: 'none!important',
      height: '460px',
      width: '100%',
    },
  })
);

export default function Geolocation() {
  const classes = useStyles();

  return (
    <div className={classes.appHeader}>
      <div className={classes.mapouter}>
        <div className={classes.gmapCanvas}>
          <iframe
            title="Geolocation"
            width="1080"
            height="460"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Vivek%20Vihar%20Phase%20-1%20delhi%20110095&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
      </div>
    </div>
  );
}
