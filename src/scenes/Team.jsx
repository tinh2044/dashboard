import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../components/Header';
import { tokens } from '../theme';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';

function Team({ noHeader }) {
    const data = useSelector((state) => state.dataTeam);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        // One Field one Column In Row
        { field: 'index', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'accessLevel',
            headerName: 'Access Level',
            flex: 1,
            // Render Access Level
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        // Set Background Color For Each Access
                        backgroundColor={
                            access === 'Admin'
                                ? colors.greenAccent[600]
                                : access === 'Manager'
                                ? colors.greenAccent[700]
                                : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {/* Set Icon For Each Access */}
                        {access === 'Admin' && <AdminPanelSettingsOutlined />}
                        {access === 'Manager' && <SecurityOutlined />}
                        {access === 'User' && <LockOpenOutlined />}
                        <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box>
            {/* No Header At DashBoard */}

            {!noHeader && <Header title="TEAM" subtitle="Managing your team" />}
            <Box
                m="12px 0 0 0"
                height="75vh"
                // OverWrite Css of Data Grid

                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: 'none',
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.blueAccent[700],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${colors.grey[100]} !important`,
                    },
                    '& .MuiDataGrid-columnSeparator': {
                        display: 'none !important',
                    },
                }}
            >
                <DataGrid rows={data} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
}

export default Team;
