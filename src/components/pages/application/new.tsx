// components
import { useEffect, useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { TextInput } from '../../ui/TextInput';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/button';
import service from '../../../services/service';
import { SPACING_LAYOUT } from '../../../styles/theme';

const loanPurposeOptions = [
  {
    label: 'Vehicle',
    value: 'vehicle',
  },
  {
    label: 'Home Improvement',
    value: 'homeImprovement',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

const loanTermOptions = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
];

const employmentStatusOptions = [
  {
    value: 'Employed',
    label: 'Employed',
  },
  {
    value: ' Self-Employed',
    label: ' Self-Employed',
  },
  {
    value: 'Unemployed',
    label: 'Unemployed',
  },
];


/*
TODO: form
__ Personal Details step:
Fields:
First name
Last name
Email
Employment Status (Employed, Self-Employed, Unemployed)
Employer Name (visible if employed)
Validation:
Required: rst name, last name, email, employment status, employer name (if employed)
__ Loan Details step:
Fields:
Vehicle price (min $2000, choose a maximum)
Deposit (min $0, should not exceed vehicle price)
Loan Purpose (Vehicle, Home Improvement, etc.)
Loan Term (1-7 years)

TODO: VALIDATION
all fields required
vehicle price - deposit > $2000

TODO: RESULTS PAGE --> lenders
TODO: Lenders API endpoint
*/
export default function NewLoan() {
  // states
  const [isInvalidForm, setIsInvalidForm] = useState<boolean>(false)

  useEffect(() => {
  }, []);

  return (<div style={{
    height: '100%',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: `${SPACING_LAYOUT}px`
  }}>
    <Card style={{
      margin: '0 auto',
      width: '80%'
    }}>
      <Typography variant="h2" style={{
        display: 'flex',
        textAlign: 'left'
      }}>New Loan</Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextInput
            error={isInvalidForm}
            label="First Name"
            value={''}
            isInline={false}
            onCallback={(value) => {
              // TODO: test
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            error={isInvalidForm}
            label="Last Name"
            value={''}
            isInline={false}
            onCallback={(value) => {
              // TODO: test
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            error={isInvalidForm}
            label="Email"
            value={''}
            isInline={false}
            onCallback={(value) => {
              // TODO: test
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            label="Employment Status"
            options={employmentStatusOptions}
            value={''}
            onCallback={() => {
              // TODO: loan purpose
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            error={isInvalidForm}
            label="Employer Name"
            value={''}
            isInline={false}
            onCallback={(value) => {
              // TODO: test
            }}
          />
        </Grid>
      </Grid>      
      <Typography variant="h2" style={{
        display: 'flex',
        textAlign: 'left'
      }}>Loan Details</Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextInput
            error={isInvalidForm}
            label="Vehicle price"
            value={''}
            isInline={false}
            onCallback={(value) => {
              // TODO: test
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            error={isInvalidForm}
            label="Deposit"
            value={''}
            isInline={false}
            onCallback={(value) => {
              // TODO: test
            }}
          />
        </Grid>
        <Grid item xs={4}>
        <Select
          label="Loan purpose"
          options={loanPurposeOptions}
          value={''}
          onCallback={() => {
            // TODO: loan purpose
          }}
        />
        </Grid>
        <Grid item xs={3}>
        <Select
          label="Loan Term"
          options={loanTermOptions}
          value={''}
          onCallback={() => {
            // TODO: loan purpose
          }}
        />
        </Grid>
      </Grid>      
      <Button 
        color="primary"
        disabled={true}
        text="Apply"
        wide={true}
        onCallback={() => {
          service.get(
            `${process.env.API_DOMAIN}/lenders/get`,
          ).then((payload): void => {
            console.log('lender data! ', payload)
            // TODO: update state
            // TODO: send to store
            // TODO: display results
          }).catch(error => {
            // TODO: logging
            throw new Error(error);
          });
      
        }}
      />
    </Card>
  </div>);
}
