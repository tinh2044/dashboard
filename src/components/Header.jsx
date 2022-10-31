import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

function Header({ title, subtitle }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="12px">
            <Typography variant="h2" align="center" color={colors.grey[100]} fontWeight="bold" sx={{ mb: '5px' }}>
                {title}
            </Typography>
            <Typography variant="h5" align="center" color={colors.grey[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
}

export default Header;
