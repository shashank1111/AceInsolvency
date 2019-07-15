import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';

const styles = theme => {
  return {
    queryForm: {
      width: '100%',
      padding: '50px',
      margin: '50px auto',
    },
  };
};

class QueryForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({
    //   [e.target.name]: e.target.value,
    //   [e.target.email]: e.target.value,
    //   [e.target.message]: e.target.value,
    // });
    const { name, email, message } = this.state;

    // const form = axios.post(
    //   'api/form',
    //   {
    //     name,
    //     email,
    //     message,
    //   },
    //   {
    //     headers: { 'Access-Control-Allow-Origin': '*' },
    //   }
    // );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.queryForm}>
        <h1>Send Your Queries</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label htmlFor="email">
              Email:
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
            <label htmlFor="message">
              Message:
              <input
                type="textarea"
                name="message"
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
QueryForm.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.any,
};

export default withStyles(styles)(QueryForm);
