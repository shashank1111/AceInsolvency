import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => {
  return {
    queryWrapper: {
      width: '100%',
      padding: '50px',
      margin: '50px auto 0 auto',
    },
    head: {
      textAlign: 'center',
      width: '100%',
      fontSize: '40px',
      color: '#005153',
      fontFamily: 'monospace',
      margin: '0',
    },
    highlight: {
      fontWeight: 'bold',
      fontSize: '18px',
    },
    paper: {
      padding: '50px',
      textAlign: 'center',
    },
    grid: {
      margin: '50px auto',
    },
  };
};

class Query extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.queryWrapper}>
        <h1 className={classes.head}>Contact us</h1>
        <Grid item xs={4} className={classes.grid}>
          <Paper className={classes.paper}>
            <div>
              <p>
                <span className={classes.highlight}>Email : </span>
                AceInhibitorsInsolvency@gmail.com
              </p>
              <p>
                <span className={classes.highlight}>Phone : </span> 9953633307
              </p>
            </div>
          </Paper>
        </Grid>
      </div>
    );
  }
}
Query.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.any,
};

export default withStyles(styles)(Query);
