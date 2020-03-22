import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

type Props = any;

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignupOrganization({takeAction, newOrganization}) {
  const classes = useStyles();
  const [newContact, setNewContact] = React.useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleFormChange = (e) => {
    const key = e.target.id;
    newContact[key] = e.target.value;
    setNewContact({...newContact});
  }

  const handleConfirm = (e) => {
    // send newOrganization and newContact to the backend
    // request auth codes from the user
    // when the user provides them, log them into the app
  }

  return (
    <List>
      <form className={classes.root} noValidate autoComplete="off">
        <ListItem>
          <TextField id="contact_name" label="Your Name" variant="outlined" value={newContact.name} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
          <TextField id="contact_phone" label="Mobile Phone Number" variant="outlined" value={newContact.phone} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
          <TextField id="contact_email" label="Email Address" variant="outlined" value={newContact.email} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
           <Button component={Link} variant="contained" color="primary" to={`/${newOrganization.organization_type}_signup`} >
             Prev &lt;&lt;
           </Button>
        </ListItem>
        <ListItem>
           <Button variant="contained" color="primary" onClick={handleConfirm} >
             Next &gt;&gt;
           </Button>
        </ListItem>
      </form>
    </List>
  );
}

