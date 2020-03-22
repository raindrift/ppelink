import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { DefaultComponentState } from '../../shared/types/react';

import IconButton from '@material-ui/core/IconButton';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

type Props = any;

export default class Home extends PureComponent<Props, DefaultComponentState> {
  render() {
    return (
      <div>
        <IconButton
          component={Link}
          value="Hospital"
          label="Hospital"
          to={`/hospital_signup`}
          aria-label="Hospital">
            <LocalHospitalIcon/>
        </IconButton>
        -
        <IconButton
          component={Link}
          value="Donor"
          label="Donor"
          to={`/donor_signup`}
          aria-label="Donor">
            <PeopleAltIcon/>
        </IconButton>
      </div>
    );
  }
}

