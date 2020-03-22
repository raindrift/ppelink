import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, FormGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = any;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  }
}));

export default function SignupOrganization({ takeAction, newOrganization }) {
  const classes = useStyles();

  const [newContact, setNewContact] = React.useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleFormChange = (e) => {
    const key = e.target.id;
    newContact[key] = e.target.value;
    setNewContact({ ...newContact });
  };

  const handleConfirm = (e) => {
    // send newOrganization and newContact to the backend
    // request auth codes from the user
    // when the user provides them, log them into the app
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={4}>
        <form noValidate autoComplete="off">
          <FormGroup className={classes.root}>
            <TextField id="contact_name" label="Your Name" variant="outlined"
                       value={newContact.name} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <TextField id="contact_phone" label="Mobile Phone Number"
                       variant="outlined" value={newContact.phone}
                       onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <TextField id="contact_email" label="Email Address"
                       variant="outlined"
                       value={newContact.email} onChange={handleFormChange} />
          </FormGroup>
          <FormGroup className={classes.root}>
            <Button component={Link} variant="contained" color="primary"
                    to={`/${newOrganization.organizationType}_signup`}>
              Prev &lt;&lt;
            </Button>
          </FormGroup>
          <FormGroup className={classes.root}>
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Next &gt;&gt;
            </Button>
          </FormGroup>
        </form>
      </Grid>
    </Grid>
  );
}
