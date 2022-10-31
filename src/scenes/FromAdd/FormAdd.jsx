import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Select, InputLabel, MenuItem, FormControl, Button, TextField, Box, useTheme } from '@mui/material';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';

import { tokens } from '../../theme';
import { actions } from './FormAddSlice';
import FormAddCustom from '../FromAddCustom/FormAddCustom';
function FormAdd({ noHeader }) {
    const dispatch = useDispatch();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const handleFormSubmit = (values) => {
        dispatch(actions.addMember(values));
    };
    const CustomizedSelectForFormik = ({ children, form, field }) => {
        const { name, value } = field;
        const { setFieldValue } = form;

        return (
            <Select
                value={value}
                onChange={(e) => {
                    setFieldValue(name, e.target.value);
                }}
                sx={{}}
            >
                {children}
            </Select>
        );
    };
    const RenderForm = ({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
        return (
            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="18px"
                    gridTemplateColumns={!isNonMobile ? undefined : 'repeat(12, minmax(0, 1fr))'}
                    // OverWrite Css Of From
                    sx={{
                        '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                        '& .MuiInputBase-root': {
                            borderRadius: '6px',
                            overflow: 'hidden',
                            backgroundColor: colors.primary[400],
                        },
                        '& .MuiFormHelperText-root': {
                            fontSize: '16px',
                            backgroundColor: 'rgba(240, 53, 53, 0.3)',
                            margin: '8px 12px 0 0',
                            paddingLeft: 1,
                        },
                        '& .MuiInputLabel-shrink': {
                            display: 'none',
                        },
                        '& .MuiSelect-select': {
                            backgroundColor: colors.primary[400],
                            display: 'flex',
                            alignItems: 'center',
                        },
                    }}
                >
                    {/* Field First Name */}
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="First Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        name="firstName"
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        sx={{ gridColumn: 'span 4' }}
                    />
                    {/* Field Last Name */}
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name="lastName"
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{ gridColumn: 'span 6' }}
                    />
                    {/* Field age */}

                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Age"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.age}
                        name="age"
                        error={!!touched.age && !!errors.age}
                        helperText={touched.age && errors.age}
                        sx={{ gridColumn: 'span 2' }}
                    />
                    {/* Field Email */}
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: 'span 5' }}
                    />
                    {/* Field Phone */}
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Phone Number"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                        name="phone"
                        error={!!touched.phone && !!errors.phone}
                        helperText={touched.phone && errors.phone}
                        sx={{ gridColumn: 'span 4' }}
                    />
                    {/* Field Access */}

                    <FormControl sx={{ gridColumn: 'span 3' }}>
                        <InputLabel id="demo-simple-select-label">Access</InputLabel>

                        <Field label="" name="access" component={CustomizedSelectForFormik}>
                            <MenuItem value="Admin">
                                <AdminPanelSettingsOutlined sx={{ marginRight: '8px' }} />
                                Admin
                            </MenuItem>
                            <MenuItem value="Manager">
                                <SecurityOutlined sx={{ marginRight: '8px' }} />
                                Manager
                            </MenuItem>
                            <MenuItem value="User">
                                <LockOpenOutlined sx={{ marginRight: '8px' }} /> User
                            </MenuItem>
                        </Field>
                    </FormControl>
                </Box>
                {/* Button Submit */}
                <Box display="flex" justifyContent="end" mt="20px">
                    <Button
                        onClick={() => handleFormSubmit(values)}
                        type="button"
                        color="secondary"
                        variant="contained"
                    >
                        Create New User
                    </Button>
                </Box>
            </form>
        );
    };
    return (
        <Box m="20px">
            {!noHeader && <Header title="CREATE USER" subtitle="Create a New User Profile" />}
            {/* Form */}
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
                {RenderForm}
            </Formik>

            <FormAddCustom />
        </Box>
    );
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
    address1: yup.string().required('required'),

    age: yup.number().required('required'),
});
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    access: 'User',
    age: '',
};

export default FormAdd;
