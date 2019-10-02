import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar>
            <Toolbar>
              <Typography variant="h4" color="inherit">
                Enter User Details
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
          <br />
          <br />
          <br />
          <br />
          <TextField
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            style={styles.input}
          />
          <br />
          <TextField
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            style={styles.input}
          />
          <br />
          <TextField
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            style={styles.input}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    width: '20%'
  },
  input: {
    width: '20%'
  }
};

export default FormUserDetails;
