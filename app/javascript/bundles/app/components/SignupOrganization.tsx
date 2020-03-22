import React from 'react';
import { useLocation } from 'react-router-dom'
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
  let location = useLocation();
  let type = 'donor';

  if(location.pathname == '/hospital_signup') {
    type = 'hospital';
  }

  if(!newOrganization) {
    newOrganization = {
      name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
      organization_type: type,
    }
  }

  // putting this in the local state makes sure the component updates
  const [newOrg, setNewOrg] = React.useState(newOrganization);

  const handleFormChange = (e) => {
    const key = e.target.id;
    newOrg[key] = e.target.value;
    setNewOrg({...newOrg});
    takeAction('rememberNewOrg', newOrg); // put in app state so this persists while navigating
  }

  let nameLabel = type === 'hospital' ? "Hospital Name" : "Company Name";
  return (
    <List>
      <form className={classes.root} noValidate autoComplete="off">
        <ListItem>
          <TextField id="name" label={nameLabel} variant="outlined" value={newOrg.name} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
          <TextField id="address1" label="Address Line 1" variant="outlined" value={newOrg.address1} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
          <TextField id="address2" label="Address Line 2" variant="outlined" value={newOrg.address2} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
          <TextField id="city" label="City" variant="outlined" value={newOrg.city} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
          <TextField id="state" label="State/Province" variant="outlined" value={newOrg.state} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
          <TextField id="postcode" label="Zip/Postal Code" variant="outlined" value={newOrg.postcode} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
          <TextField id="country" label="Country" variant="outlined" value={newOrg.country} onChange={handleFormChange} />
        </ListItem>
        <ListItem>
           <Button component={Link} variant="contained" color="primary" to={`/add_contact`} >
             Next &gt;&gt;
           </Button>
        </ListItem>
      </form>
    </List>
  );
}

