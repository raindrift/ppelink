import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  Grid,
  FormGroup,
  Typography,
  Button,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HOME_PATH } from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  }
}));

export default function AddContact({ takeAction, newOrganization }) {
  const classes = useStyles();

  if (!newOrganization) {
    return (<Redirect to={HOME_PATH} />);
  }

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
        <Typography variant="h3" className={classes.root}>
          Add Contact Info
        </Typography>
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
