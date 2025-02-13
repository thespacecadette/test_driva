// components
import { useEffect, useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Controller, useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"
import { TextInput } from '../../ui/TextInput';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/button';
import service from '../../../services/service';
import { SPACING_LAYOUT } from '../../../styles/theme';
import { modalStyle } from './styles';

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
    value: '1',
    label: 1,
  },
  {
    value: '2',
    label: 2,
  },
  {
    value: '3',
    label: 3,
  },
  {
    value: '4',
    label: 4,
  },
  {
    value: '5',
    label: 5,
  },
  {
    value: '6',
    label: 6,
  },
  {
    value: '7',
    label: 7,
  },
];
const employmentStatusOptions = [
  {
    value: 'employed',
    label: 'Employed',
  },
  {
    value: ' selfEmployed',
    label: ' Self-Employed',
  },
  {
    value: 'unemployed',
    label: 'Unemployed',
  },
];

/*
TODO: form
__ Personal Details step:
__ Loan Details step:
TODO: VALIDATION
all fields required
vehicle price - deposit > $2000
TODO: RESULTS PAGE --> lenders
*/
export default function NewLoan() {
  // states
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [values, setValues] = useState({
    firstName: 'test',
    lastName: 'test',
    email: '',
    employmentStatus: employmentStatusOptions[0].value,
    employerName: 'test',
    vehiclePrice: '123123',
    deposit: '1234',
    loanPurpose: loanPurposeOptions[0].value,
    loanTermYears: loanTermOptions[0].value,
  });
  const [isFormValid, setFormValidation] = useState<boolean>(false);
  // form
  const {
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    register,
    setValue,
  } = useForm({
    defaultValues: values,
  });

  // validation
  useEffect(() => {
    const isVehiclePriceMinusDepositMoreThan2K = parseFloat(values.vehiclePrice) - parseFloat(values.deposit) > 2000;

    if (isValid) {
      // const isVehiclePriceMinusDepositLessThan2K = parseFloat(values.vehiclePrice) - parseFloat(values.deposit) > 2000;

      if (isVehiclePriceMinusDepositMoreThan2K) {
        setOpen(false);
        setFormValidation(true);
      } else {
        setOpen(true);
        setFormValidation(false);
      }
    }
  }, [values, isValid]);

  // form functions
  const showErrorMessage = (errors: any, field: string) => errors && errors[field] && errors[field].message ? errors[field].message : '';
  const saveFormValue = (field: never, value: never) => {
    setValue(field as never, value as never, { shouldValidate: true })
    setValues({
      ...values, 
      [field]: value,
    })
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (<div style={{
    height: '100%',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: `${SPACING_LAYOUT}px`
  }}>
    <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...modalStyle, width: 500 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Vehicle Minimum Deposit required
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your vehicle price - deposit must be more than $2000.
          </Typography>
        </Box>
      </Modal>
    <Card style={{
      margin: '0 auto',
      width: '80%'
    }}>
      <Typography variant="h3" style={{
        display: 'flex',
        textAlign: 'left'
      }}>Personal Details</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextInput
              error={!!errors['firstName']}
              errorText={showErrorMessage(errors, 'firstName')}
              label="First Name"
              value={values.firstName}
              isInline={false}
              onCallback={(value) => {
                saveFormValue('firstName' as never, value as never)
              }}
              {...register('firstName' as never, { required: 'This is a required field. ' })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInput
              error={!!errors['lastName']}
              errorText={showErrorMessage(errors, 'lastName')}
              label="Last Name"
              value={values.lastName}
              isInline={false}
              onCallback={(value) => {
                saveFormValue('lastName' as never, value as never)
              }}
              {...register('lastName' as never, { required: 'This is a required field. ' })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextInput
              error={!!errors['email']}
              errorText={showErrorMessage(errors, 'email')}
              label="Email"
              value={values.email}
              isInline={false}
              onCallback={(value) => {
                saveFormValue('email' as never, value as never)
              }}
              {...register('email', { required: 'This is a required field. ', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address'} })}
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Employment Status"
              options={employmentStatusOptions}
              value={values.employmentStatus}
              onCallback={(value) => {
                saveFormValue('employmentStatus' as never, value as never)
              }}
              {...register('employmentStatus' as never, { required: 'This is a required field. ' })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextInput
              error={!!errors['employerName']}
              errorText={showErrorMessage(errors, 'employerName')}
              label="Employer Name"
              value={values.employerName}
              isInline={false}
              onCallback={(value) => {
                saveFormValue('employerName' as never, value as never)
              }}
              {...register('employerName' as never, { required: 'This is a required field. ' })}
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
              error={!!errors['vehiclePrice']}
              errorText={showErrorMessage(errors, 'vehiclePrice')}
              label="Vehicle price"
              value={values.vehiclePrice}
              isInline={false}
              onCallback={(value) => {
                saveFormValue('vehiclePrice' as never, value as never)
              }}
              {...register('vehiclePrice' as never, { required: 'This is a required field. ' })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInput
              error={!!errors['vehiclePrice']}
              errorText={showErrorMessage(errors, 'vehiclePrice')}
              label="Deposit"
              value={values.deposit}
              isInline={false}
              onCallback={(value) => {
                saveFormValue('deposit' as never, value as never)
              }}
              {...register('deposit' as never, { required: 'This is a required field. ' })}
            />
          </Grid>
          <Grid item xs={4}>
          <Select
            error={!!errors['loanPurpose']}
            errorText={showErrorMessage(errors, 'loanPurpose')}
            label="Loan purpose"
            options={loanPurposeOptions}
            value={values.loanPurpose}
            onCallback={(value) => {
              saveFormValue('loanPurpose' as never, value as never)
            }}
            {...register('loanPurpose' as never, { required: 'This is a required field. ' })}
          />
          </Grid>
          <Grid item xs={2}>
          <Select
            error={!!errors['loanTermYears']}
            errorText={showErrorMessage(errors, 'loanTermYears')}
            label="Loan Term"
            options={loanTermOptions}
            value={values.loanTermYears}
            onCallback={(value) => {
              saveFormValue('loanTermYears' as never, value as never)
            }}
            {...register('loanTermYears' as never, { required: 'This is a required field. ' })}
          />
          </Grid>
        </Grid>
        <Button
          color="primary"
          disabled={!isFormValid}
          type="submit"
          text="Apply"
          wide={true}
          onCallback={() => {
            console.log(getValues());
            // service.get(
            //   `${process.env.API_DOMAIN}/lenders/get`,
            // ).then((payload): void => {
            //   console.log('lender data! ', payload)
            //   // TODO: update state
            //   // TODO: send to store
            //   // TODO: display results
            // }).catch(error => {
            //   // TODO: logging
            //   throw new Error(error);
            // });
          }}
        />
      </form>
    </Card>
  </div>);
}
