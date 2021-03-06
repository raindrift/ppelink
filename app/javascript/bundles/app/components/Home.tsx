import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {
  DONOR_SIGN_UP_PATH,
  HOSPITAL_SIGN_UP_PATH
} from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: 'center'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Card className={classes.center}>
          <CardContent>
            <Button
              component={Link}
              value="Hospital"
              label="Hospital"
              to={HOSPITAL_SIGN_UP_PATH}
              aria-label="Hospital"
              endIcon={<LocalHospitalIcon />}
            >
              Hospital Sign Up
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.center}>
          <CardContent>
            <Button
              component={Link}
              value="Donor"
              label="Donor"
              to={DONOR_SIGN_UP_PATH}
              aria-label="Donor"
              endIcon={<PeopleAltIcon />}
            >
              Donor Sign Up
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

