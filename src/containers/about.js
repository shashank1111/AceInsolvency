import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  appAbout: {
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
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.appAbout}>
      <div className={classes.wrapper}>
        <h1 className={classes.head}>About Us</h1>
        <p className={classes.description}>
          It is our constant endeavour to educate and provide best services to
          our clients. In this context, we have deliberations with professionals
          having domain expertise in different the fields of law with primary
          focus on Insolvency and Bankruptcy Code, 2016.
        </p>
        <img
          alt="aboutimg"
          src="images/banner-7.jpg"
          className={classes.imageArea}
        />

        <div className={classes.detailsArea}>
          <Grid container spacing={2} className={classes.blocks}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <h4>
                  We provide vast range of Services from giving Advisory on
                  various issues arising under the Insolvency and Bankruptcy
                  Code, 2016 and to exhaustive treatment of such issues.
                </h4>
                <ul className={classes.ul}>
                  <li className={classes.item}>
                    Filing Petition on behalf of Financial or Operational
                    Creditors.
                  </li>
                  <li className={classes.item}>
                    Filing claims on behalf of creditors.
                  </li>
                  <li className={classes.item}>
                    Representing Creditors in National Company Law tribunal or
                    Committee of Creditors
                  </li>
                  <li className={classes.item}>
                    Providing Corporate Insolvency Resolution Process (“CIRP”)
                    support Services to Appointed Insolvency Professionals
                    (Interim Resolution Professionals or Resolution
                    Professionals)i.e. claim verification, drafting progress
                    report, representing before the NCLT/ NCLAT/ IBBI, filing
                    Interlocutory Applications, conducting COC, Preparing Agenda
                    Minutes and Voting Result.
                  </li>
                  <li className={classes.item}>
                    We also expertises in providing services to management/
                    promoters of Corporate Debtors whether it be representation
                    before different forums or advisory.
                  </li>
                  <li className={classes.item}>
                    Advisory, due diligence, drafting resolution plan,
                    submission of plan with presentation before the Committee of
                    creditors, filing any application before NCLT/ NCLAT and
                    execution of Resolution Plan for Resolution Applicant.
                  </li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <img
                alt="aboutimg"
                src="images/banner-9.jpg"
                className={classes.innerImg}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h4>
                  Our team is highly business oriented in approach and has
                  experience across sectors and the acumen to provide complete
                  solutions for all Companies Act related matters including:
                </h4>
                <ul className={classes.ul}>
                  <li className={classes.item}>
                    Registration of the New Company, Section 25 Company, Limited
                    Liability Partnerships (LLP), Change of Name, Change of
                    Objects, Change of status from Public Ltd to Private Ltd and
                    vice a versa
                  </li>
                  <li className={classes.item}>
                    Conversion of a Partnership Firm/ Limited Liability
                    Partnerships (LLP) into a Company
                  </li>
                  <li className={classes.item}>
                    Registration of Foreign Company (Branch Office / Liaison
                    Office / Project Office)
                  </li>
                  <li className={classes.item}>
                    Assisting in making petitions to be filed with Company Law
                    Board, Regional Director, Registrar of Companies{' '}
                  </li>
                  <li className={classes.item}>
                    Assistance in shifting of registered office from State to
                    another
                  </li>
                  <li className={classes.item}>
                    Assisting in preparation of Minutes, Notices, Agenda &
                    Resolutions for Board Meeting, Annual / Extra-Ordinary
                    General Meeting & Committee Meetings
                  </li>
                  <li className={classes.item}>
                    Assisting in preparation of various registers like Register
                    of Member, Register of Transfer, Register of Charges,
                    Register of Director, Register of related party transaction,
                    etc.
                  </li>
                  <li className={classes.item}>
                    Liasioning with the office of Registrar of Companies,
                    Regional Director and Company Law Board for obtaining
                    various regulatory approvals{' '}
                  </li>
                  <li className={classes.item}>
                    Arranging Secretarial Compliance Certificate for Public,
                    Private & Listed Companies
                  </li>

                  <li className={classes.item}>
                    Assistance in procedural compliance required toward mergers,
                    demergers, acquisition, amalgamations, take over, slump sale
                    etc.
                  </li>
                  <li className={classes.item}>
                    Assisting in winding up/closure of companies in India
                  </li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h4>
                  Offering comprehensive services in this branch of Intellectual
                  Property Law, which also include search, investigation and
                  drafting of agreements. These services are available not only
                  in India, but across the globe, through reliable,
                  international associates
                </h4>

                <ul className={classes.ul}>
                  <li className={classes.item}>Logo Designing</li>
                  <li className={classes.item}>Availability search</li>
                  <li className={classes.item}>Application Filing</li>
                  <li className={classes.item}>
                    Application, Prosecution, Pre and Post-registration
                  </li>
                  <li className={classes.item}>Opposition procedures</li>
                  <li className={classes.item}>
                    Enforcement of Trademark owners' rights
                  </li>
                  <li className={classes.item}>Investigation</li>
                  <li className={classes.item}>Infringement & Litigation</li>
                  <li className={classes.item}>Anti-counterfeiting action</li>
                  <li className={classes.item}>
                    Registration of Assignments of Trademarks
                  </li>
                  <li className={classes.item}>
                    Mergers and Acquisitions of Corporate Entities, and related
                    IPR work
                  </li>
                  <li className={classes.item}>Renewals</li>
                  <li className={classes.item}>Trademark Watch</li>
                  <li className={classes.item}>
                    Enforcement of Trade Secrets & Know-how{' '}
                  </li>
                  <li className={classes.item}>Market investigation</li>
                  <li className={classes.item}>
                    {' '}
                    Negotiation of sale & purchase of brands
                  </li>
                  <li className={classes.item}>Brand Valuation</li>
                  <li className={classes.item}>Advice on brand creation</li>
                  <li className={classes.item}>
                    Drafting and Vetting of Transfer of Technology, License and
                    Franchise agreements
                  </li>
                  <li className={classes.item}>Domain name related services</li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
