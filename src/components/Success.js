import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Success extends Component {
  continue = e => {
    e.preventDefault();
    // process form like calling APIs
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar>
            <Toolbar>
              <Typography variant="h4" color="inherit">
                Confirm User Data
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Thank you for your submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
