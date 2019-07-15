import React from 'react';
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  table: {
    border: '1px solid #ececec',
    '& td': {
      border: '1px solid #ececec',
    },
    '& th': {
      borderBottom: '1px solid #ececec',
    },
  },
  cirpServices: {
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
    padding: '20px 40px 50px 40px',
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
  tableHead: {
    backgroundColor: '#005153 !important',
  },
}));
const StyledTableCell = withStyles(theme =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles(theme =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  })
)(TableRow);
const formJson = {
  data: [
    {
      SectionCode: 'Section 16(1)',
      Description: 'Commencement of CIRP and Appointment of IRP',
      Timeline: 'T',
    },
    {
      SectionCode: 'Regulation 6(1)',
      Description: 'Publication of Public Announcement',
      Timeline: 'T+3',
    },
    {
      SectionCode: 'Section 15(1)(c) / Regulation 12 (1)',
      Description: 'Submission of Claims ',
      Timeline: 'T+14',
    },
    {
      SectionCode: 'Regulation 13(1)',
      Description: 'Verification of Claims',
      Timeline: 'T+21',
    },
    {
      SectionCode: 'Section 26(6A) / Regulation 15A',
      Description:
        'Application for Appointment of Authorised Representative, if necessary',
      Timeline: 'T+23',
    },
    {
      SectionCode: 'Regulation 17(1)',
      Description: 'Filing of Report Certifying Constitution of CoC',
      Timeline: 'T+23',
    },
    {
      SectionCode: 'Section 22(1) and regulation 17(2)',
      Description: 'First Meeting of the CoC',
      Timeline: 'T+30',
    },
    {
      SectionCode: 'Regulation 35A',
      Description: 'Determination of fraudulent and other transactions',
      Timeline: 'T+115',
    },
    {
      SectionCode: 'Regulation 27',
      Description: 'Appointment of two Registered Valuers',
      Timeline: 'T+47',
    },
    {
      SectionCode: 'Regulation 36 (1)',
      Description: 'Submission of Information Memorandum to CoC',
      Timeline: 'T+57',
    },
    {
      SectionCode: 'Regulation 36A',
      Description:
        'Invitation of EoI , Publication of Form G , Provisional List of Resolution Applicants , Final List of Resolution Applicants',
      Timeline: 'T+75 , T+75 , T+100 , T+115',
    },
    {
      SectionCode: 'Regulation 36B',
      Description:
        'Issue of Request for Resolution Plan, which includes Evaluation Matrix and Information Memorandum to Resolution Applicants',
      Timeline: 'T+105',
    },
    {
      SectionCode: 'Section 30(6) / Regulation 39(4))',
      Description: 'Submission of CoC approved Resolution Plan',
      Timeline: 'T+165',
    },
    {
      SectionCode: 'Section 31(1)',
      Description: 'Approval of Resolution Plan',
      Timeline: 'T=180',
    },
  ],
};

export default function CirpServices() {
  const classes = useStyles();
  return (
    <div className={classes.cirpServices}>
      <div className={classes.wrapper}>
        <h1 className={classes.head}>CIRP Support Services</h1>
        <p className={classes.description}>
          The Corporate Insolvency Resolution Process can be initiated by making
          an application to the National Company Law Tribunal (NCLT) by the
          Financial Creditors under Section 7 of IBC, 2016 by Operational
          Creditors under Section 9 of the IBC, 2016 and by the Corporate Debtor
          himself under Section 10 of the IBC, 2016.
        </p>

        <div className={classes.detailsArea}>
          <Grid container spacing={2} className={classes.blocks}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h4>MODEL TIMELINE FOR INSOLVENCY:-</h4>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell
                        style={{
                          width: '25%',
                          textAlign: 'center',
                          fontSize: '18px',
                        }}
                        className={classes.tableHead}
                      >
                        Section of the Code / Regulation No
                      </StyledTableCell>
                      <StyledTableCell
                        className={classes.tableHead}
                        style={{ fontSize: '18px', textAlign: 'center' }}
                      >
                        Description of Activity
                      </StyledTableCell>
                      <StyledTableCell
                        className={classes.tableHead}
                        style={{ fontSize: '18px', textAlign: 'center' }}
                      >
                        Latest Timeline under regulation 40A
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {formJson.data.map(function(item, index) {
                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {item.SectionCode}
                          </StyledTableCell>
                          <StyledTableCell>{item.Description}</StyledTableCell>
                          <StyledTableCell>{item.Timeline}</StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h4>
                  CIR Process is a very comprehensive process and requires
                  dynamic Individuals with variety of skills and extensive
                  understanding of IBC in order to support appointed Insolvency
                  Professionals, we provide Insolvency Professionals with
                  support services so that burden of work can be reduced.
                </h4>
                <h4>Scope of Support Services:</h4>
                <ul className={classes.ul}>
                  <li className={classes.item}>Claim Verification under</li>
                  <li className={classes.item}>
                    Conducting due diligence related to documents of Corporate
                    Debtor.
                  </li>
                  <li className={classes.item}>
                    Taking possession of Corporate Debtor Assets
                  </li>
                  <li className={classes.item}>
                    Informing various institutions regarding commencement if
                    CIRP
                  </li>
                  <li className={classes.item}>
                    Drafting various documents related to Committee of Creditors
                  </li>
                  <ul>
                    <li>Certificate forming CoC</li>
                    <li>Notice, Agenda, Minutes and Voting Results of CoC</li>
                  </ul>
                  <li className={classes.item}>Conducting CoC meeting</li>
                  <li className={classes.item}>
                    Interlocutory Applications under various Sections related to
                    i.e.
                  </li>
                  <ul>
                    <li>
                      Non-Cooperation by Ex-management of Corporate Debtor
                    </li>
                    <li>
                      Transactions under section 43 to 50 relation i.e.
                      preferential, undervalued, fraudulent etc.
                    </li>
                    <li>Seeking specific directions.</li>
                  </ul>
                  <li>
                    Preparing Information Memorandum, RFRP, Evaluation Matrix
                    etc.
                  </li>
                  <li>
                    Conducting Resolution Plans Due Diligence and negotiating
                    with Resolution Applicant.
                  </li>
                  <li>
                    Appearing on various forums for IRP/ RP / Corporate Debtor
                    including in Hon’ble National Company Law Tribunal, Hon’ble
                    National Company Law Appellant Tribunal, District Courts and
                    High Courts.
                  </li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
