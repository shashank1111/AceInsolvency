import React, { PureComponent } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

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
      serialNo: '1',
      subject:
        'Forms under the Insolvency and Bankruptcy Board of India (Insolvency Resolution Process for Corporate Persons) Regulations, 2016	',
      forms: [
        {
          name: 'Form A',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_A.docx',
        },
        {
          name: 'Form AA',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_AA.docx',
        },
        {
          name: 'Form AB',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_AB.docx',
        },
        {
          name: 'Form B',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_B.docx',
        },
        {
          name: 'Form C',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_C.docx',
        },
        {
          name: 'Form CA',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_CA',
        },
        {
          name: 'Form D',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_D',
        },
        {
          name: 'Form E',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_E',
        },
        {
          name: 'Form F',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_F',
        },
        {
          name: 'Form FA',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_FA',
        },
        {
          name: 'Form G',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_G.docx',
        },
        {
          name: 'Form H',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_H.docx',
        },
      ],
    },
    {
      serialNo: '2',
      subject:
        'Forms under the Insolvency and Bankruptcy Board of India (Fast Track Insolvency Resolution Process for Corporate Persons) Regulations, 2017',
      forms: [
        {
          name: 'Form A',
          url: 'https://www.ibbi.gov.in/uploads/downloads/FT_Form_A.docx',
        },
        {
          name: 'Form B',
          url: 'https://www.ibbi.gov.in/uploads/downloads/FT_Form_B.docx',
        },
        {
          name: 'Form C',
          url: 'https://www.ibbi.gov.in/uploads/downloads/FT_Form_C.docx',
        },
        {
          name: 'Form D',
          url: 'https://www.ibbi.gov.in/uploads/downloads/FT_Form_D.docx',
        },
        {
          name: 'Form E',
          url: 'https://www.ibbi.gov.in/uploads/downloads/FT_Form_E.docx',
        },
        {
          name: 'Form F',
          url: 'https://www.ibbi.gov.in/uploads/downloads/FT_Form_F.docx',
        },
      ],
    },
    {
      serialNo: '3',
      subject:
        'Forms under the Insolvency and Bankruptcy Board of India (Liquidation process) Regulations, 2017',
      forms: [
        {
          name: 'Form A',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_A_LP.pdf',
        },
        {
          name: 'Form B',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_B_LP.pdf',
        },
        {
          name: 'Form C',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_C_LP.pdf',
        },
        {
          name: 'Form D',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_D_LP.pdf',
        },
        {
          name: 'Form E',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_E_LP.pdf',
        },
        {
          name: 'Form F',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_F_1_LP.pdf',
        },
        {
          name: 'Form G',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_G_LP.pdf',
        },
        {
          name: 'Schedule-III',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Schedule_III_LP.pdf',
        },
      ],
    },
    {
      serialNo: '4',
      subject:
        'Forms under the Insolvency and Bankruptcy Board of India (Voluntary Liquidation process) Regulations, 2017',
      forms: [
        {
          name: 'Form A',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_A_VL.pdf',
        },
        {
          name: 'Form B',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_B_VL.pdf',
        },
        {
          name: 'Form C',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_C_VL.pdf',
        },
        {
          name: 'Form D',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_D_VL.pdf',
        },
        {
          name: 'Form E',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_F_VL.pdf',
        },
        {
          name: 'Form F',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Form_A_VL.pdf',
        },
        {
          name: 'Schedule-II',
          url: 'https://www.ibbi.gov.in/uploads/downloads/Schedule_II_VL.pdf',
        },
      ],
    },
  ],
};

const styles = () => {
  return {
    root: {
      width: '100%',
      overflowX: 'auto',
      maxWidth: '1140px',
      margin: '40px auto',
      boxShadow: 'none',
      marginBottom: '90px',
    },
    table: {
      minWidth: 700,
      border: '1px solid #ffe500',
      '& td': {
        border: '1px solid #ffe500',
      },
      '& th': {
        borderBottom: '1px solid #ffe500',
      },
    },
    heading: {
      textAlign: 'center',
      padding: '20px 50px',
      fontSize: '40px',
      color: '#005153',
      fontFamily: 'monospace',
    },
    tableHead: {
      background:
        'linear-gradient(to right, rgba(230,173,60,1) 0%,rgba(255,196,76,1) 100%)',
      fontSize: '14px',
      fontWeight: '600',
      color: '#000000',
      padding: '8px 10px',
    },

    link: {
      color: '#337ab7',
      marginRight: '13.5px',
      display: 'inline-block',
      '&:hover': {
        color: '#23527c',
        textDecoration: 'none',
      },
    },
  };
};

class ClaimFiling extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Box>
        <h1 className={classes.heading}>{this.props.heading}</h1>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell
                  style={{ width: '7%' }}
                  className={classes.tableHead}
                >
                  Sr. No
                </StyledTableCell>
                <StyledTableCell className={classes.tableHead}>
                  Subject
                </StyledTableCell>
                <StyledTableCell className={classes.tableHead}>
                  Forms
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formJson.data.map(function(item, index) {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.serialNo}
                    </StyledTableCell>
                    <StyledTableCell>{item.subject}</StyledTableCell>
                    <StyledTableCell>
                      {item.forms.map(function(form, index) {
                        return (
                          <Link
                            key={index}
                            target="_blank"
                            href={form.url}
                            className={classes.link}
                          >
                            {form.name}
                          </Link>
                        );
                      })}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    );
  }
}
ClaimFiling.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.any,
};
export default withStyles(styles)(ClaimFiling);
