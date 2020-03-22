import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormGroup, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  }
}));

export default function SignupOrganization({ takeAction, newOrganization }) {
  const classes = useStyles();
  const location = useLocation();

  let type = 'donor';

  if (location.pathname === '/hospital_signup') {
    type = 'hospital';
  }

  const organziation = newOrganization || {
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    organizationType: type
  };

  // putting this in the local state makes sure the component updates
  const [newOrg, setNewOrg] = React.useState(organziation);

  const handleFormChange = (e) => {
    const key = e.target.id;
    newOrg[key] = e.target.value;
    setNewOrg({ ...newOrg });
    takeAction('rememberNewOrg', newOrg); // put in app state so this persists while navigating
  };

  const isHospital = type === 'hospital';
  const nameLabel = isHospital ? 'Hospital Name' : 'Company Name';

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={4}>
        <Typography variant="h3" className={classes.root}>
          {isHospital ? 'Hospital Sign Up' : 'Donor Sign Up'}
        </Typography>
        <form noValidate autoComplete="off">
          <FormGroup className={classes.root}>
            <TextField id="name" label={nameLabel} variant="outlined"
                       value={newOrg.name} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <TextField id="address1" label="Address Line 1" variant="outlined"
                       value={newOrg.address1} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <TextField id="address2" label="Address Line 2" variant="outlined"
                       value={newOrg.address2} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <TextField id="city" label="City" variant="outlined"
                       value={newOrg.city} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <TextField id="state" label="State/Province" variant="outlined"
                       value={newOrg.state} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <TextField id="postcode" label="Zip/Postal Code" variant="outlined"
                       value={newOrg.postcode} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <TextField id="country" label="Country" variant="outlined"
                       value={newOrg.country} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              to="/add_contact"
              disabled={
                !newOrg.name
                || !newOrg.address1
                || !newOrg.city
                || !newOrg.postcode
                || !newOrg.country
              }
            >
              Next &gt;&gt;
            </Button>
          </FormGroup>
        </form>
      </Grid>
    </Grid>
  );
}
