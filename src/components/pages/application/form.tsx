// components
import { useEffect, useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setLenders } from '../../../store/lenders/slice';
import { TextInput } from '../../ui/TextInput';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/button';
import service from '../../../services/service';
import { SPACING_LAYOUT } from '../../../styles/theme';
import { modalStyle, subHeadingStyle } from './styles';
import { employmentStatusOptions, loanPurposeOptions, loanTermOptions, STEPPER_STEPS } from '../formValues';
import { Store } from '../../../store';

/*
TODO: validation - vehicle price - deposit > $2000
TODO: RESULTS PAGE --> lenders
*/
export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  employmentStatus: string;
  employerName: string;
  vehiclePrice: string;
  deposit: string;
  loanPurpose: string;
  loanTermYears: string;
};
export const loanRuleViolation = (values: FormFields): boolean => parseFloat(values.vehiclePrice) - parseFloat(values.deposit) <= 2000;
export const isValidThreshold = (dirtyFields: any, values: FormFields): boolean => (!dirtyFields.deposit || !dirtyFields.vehiclePrice) && loanRuleViolation(values);

export default function NewLoan() {
  const dispatch = useDispatch()

  // states
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    employmentStatus: '',
    employerName: '',
    vehiclePrice: '',
    deposit: '',
    loanPurpose: '',
    loanTermYears: '',
  });
  const lenderData = useSelector((state: Store) => state.lenders).lenders

  // form
  const {
    getValues,
    handleSubmit,
    formState: { errors, isValid, dirtyFields, isDirty },
    register,
    setValue,
  } = useForm({
    defaultValues: values,
  });

  // validation

  useEffect(() => {
    console.log('dirtyFields', dirtyFields)
    console.log('errors', errors)
    console.log('isDirty', isDirty)
    console.log('isValid', isValid)
    console.log('values', values)
    // console.log('isValidThreshold', isValidThreshold())
  }, [values, isValid, errors, isDirty, dirtyFields]);
  // form functions
  const showErrorMessage = (errors: any, field: string) => errors && errors[field] && errors[field].message ? errors[field].message : '';
  const saveFormValue = (field: never, value: never) => {
    setValue(field as never, value as never, { shouldValidate: true, shouldDirty: true })
    setValues({
      ...values, 
      [field]: value,
    })
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (isValid) {
      setOpen(isValidThreshold(dirtyFields, values));
    }
    console.log(data);
  };

  // stepper
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
            Your vehicle price minus deposit must be more than $2000.
          </Typography>
        </Box>
      </Modal>
    <Card style={{
      margin: '0 auto',
      width: '80%'
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep}>
          {STEPPER_STEPS.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
            } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 && 
        <Grid container spacing={2}>
          <Typography variant="h3" style={subHeadingStyle}>Personal Details</Typography>
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
          <Grid item xs={12}>
            <Button
              color="primary"
              disabled={!dirtyFields.firstName || !dirtyFields.lastName || !dirtyFields.email || !dirtyFields.employmentStatus || !dirtyFields.employerName || !!errors['firstName'] || !!errors['lastName'] || !!errors['email'] || !!errors['employmentStatus'] || !!errors['employerName']}
              type="submit"
              text="Next: Loan details"
              wide={true}
              onCallback={() => {
                handleNext();
              }}
            />
          </Grid>
        </Grid>}
        {activeStep === 1 && 
        <Grid container spacing={2}>
          <Typography variant="h3" style={subHeadingStyle}>Loan Details</Typography>
          <Grid item xs={6}>
            <TextInput
              error={isValidThreshold(dirtyFields, values) || !!errors['vehiclePrice']}
              errorText={isValidThreshold(dirtyFields, values) ? `Your vehicle price minus deposit must be more than $2000. It's currently offset by $${parseFloat(values.vehiclePrice) - parseFloat(values.deposit)}` : showErrorMessage(errors, 'vehiclePrice')}
              label="Vehicle price"
              value={values.vehiclePrice}
              isInline={false}
              onCallback={(value) => {
                saveFormValue('vehiclePrice' as never, value as never)
              }}
              onBlurCallback={() => {
                setOpen(isValidThreshold(dirtyFields, values));
              }}
              {...register('vehiclePrice' as never, { required: 'This is a required field. ' })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInput
              error={isValidThreshold(dirtyFields, values) || !!errors['deposit']}
              errorText={isValidThreshold(dirtyFields, values) ? `Your vehicle price minus deposit must be more than $2000. It's currently offset by $${parseFloat(values.vehiclePrice) - parseFloat(values.deposit)}` : showErrorMessage(errors, 'deposit')}
              label="Deposit"
              value={values.deposit}
              isInline={false}
              onCallback={(value) => {
                saveFormValue('deposit' as never, value as never)
              }}
              onBlurCallback={() => {
                setOpen(isValidThreshold(dirtyFields, values));
              }}
              {...register('deposit' as never, { required: 'This is a required field. '})}
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
          <Grid item xs={12}>
            <Button
              color="primary"
              disabled={!isValid && isValidThreshold(dirtyFields, values)}
              type="submit"
              text="Apply"
              wide={true}
              onCallback={() => {
                service.get(
                  `${process.env.API_DOMAIN}/lenders/get`,
                ).then((payload): void => {
                  dispatch(setLenders(payload.data))
                  handleNext();
                }).catch(error => {
                  throw new Error('Error with Lenders API. Please start the BE server')
                });
              }}
            />
          </Grid>
        </Grid>}
        {activeStep === 2 && <Grid container>
          <Typography variant="h3" style={subHeadingStyle}>Lenders</Typography>
          {JSON.stringify(lenderData)}
        </Grid>}
      </form>
    </Card>
  </div>);
}
