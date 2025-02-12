// components
import { Card, Typography } from '@mui/material';
import { Logo } from '../../ui/logo';

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
  return (<div style={{
    height: '100%',
    textAlign: 'center',
    width: '100%',
  }}>
    <Logo 
      title="Driva" 
      width={200}  
    />
    <Card style={{
      margin: '0 auto',
      width: '50%'
    }}>
      <Typography variant="subtitle1" style={{
        display: 'flex',
        textAlign: 'left'
      }}>New Loan</Typography>
    </Card>
  </div>);
}
