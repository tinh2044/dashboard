import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import { InputBase } from '@mui/material';
import {
    LightModeOutlined,
    DarkModeOutlined,
    SettingsOutlined,
    NotificationsOutlined,
    PersonOutline,
    Search,
} from '@mui/icons-material';
function TopBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between">
            {/* Search */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="4px">
                <InputBase sx={{ ml: 2, flex: 1 }}></InputBase>
                <IconButton type="button" sx={{ p: 1 }}>
                    <Search />
                </IconButton>
            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <PersonOutline />
                </IconButton>
            </Box>
        </Box>
    );
}

export default TopBar;
