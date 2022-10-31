import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Select, InputLabel, MenuItem, FormControl, Button, TextField, Box, useTheme } from '@mui/material';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';

import { tokens } from '../../theme';
import { actions } from './FormAddCustomSlice';
function FormAddCustom({ noHeader }) {
    const dispatch = useDispatch();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const handleFormSubmit = (values) => {
        dispatch(actions.addCustom(values));
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
                        sx={{ gridColumn: 'span 5' }}
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
                        sx={{ gridColumn: 'span 7' }}
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
                        sx={{ gridColumn: 'span 6' }}
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
                        sx={{ gridColumn: 'span 2' }}
                    />
                </Box>
                {/* Button Submit */}
                <Box display="flex" justifyContent="end" mt="20px">
                    <Button
                        onClick={() => handleFormSubmit(values)}
                        type="button"
                        color="secondary"
                        variant="contained"
                    >
                        Create New Customer
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
        </Box>
    );
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
    const: yup.string().required('required'),
});
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    const: '',
};

export default FormAddCustom;
