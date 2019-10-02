import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar>
            <Toolbar>
              <Typography variant="h4" color="inherit">
                Enter Personal Details
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
          <br />
          <br />
          <br />
          <br />
          <TextField
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            style={styles.input}
          />
          <br />
          <TextField
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
            style={styles.input}
          />
          <br />
          <TextField
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
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
          <Button
            variant="contained"
            color="secondary"
            style={styles.button}
            onClick={this.back}
          >
            Back
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    width: '9%'
  },
  input: {
    width: '20%'
  }
};

export default FormPersonalDetails;
