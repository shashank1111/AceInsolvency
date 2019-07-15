import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClaimFiling from '../components/body/claimFiling';
import Button from '@material-ui/core/Button';
import Query from '../components/body/query';

const useStyles = makeStyles(theme => ({
  appClaim: {
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
    fontSize: '18px',
    margin: '0 auto 60px auto',
  },
  imageArea: {
    width: '100%',
    height: '600px',
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
  buttonArea: {
    width: '100%',
    textAlign: 'center',
  },
  button: {
    margin: '20px auto',
    width: '60%',
    padding: '30px',
    fontSize: '24px',
    color: '#fff',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

export default function ClaimsPage() {
  const classes = useStyles();
  return (
    <div className={classes.appClaim}>
      <div className={classes.wrapper}>
        <h1 className={classes.head}>Claim Filing</h1>
        <p className={classes.description}>
          It is our constant endeavour to educate and provide best services to
          our clients. In this context, we have deliberations with professionals
          having domain expertise in different the fields of law with primary
          focus on Insolvency and Bankruptcy Code, 2016.
        </p>

        <div className={classes.detailsArea}>
          <Grid container spacing={2} className={classes.blocks}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ClaimFiling heading="Download Claim Forms" />
                <div className={classes.buttonArea}>
                  <Button className={classes.button}>
                    FILL FORM NOW WITH HELP OF A PROFESSIONAL
                  </Button>
                </div>
                <div style={{ marginTop: '-70px' }}>
                  <Query />
                </div>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <img
              alt="claimImage"
              src="images/banner-10.jpg"
              className={classes.imageArea}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
}
