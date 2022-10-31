import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { tokens } from '../theme';
import { mockDataContacts } from '../data/mockData';
import Header from '../components/Header';

const Contacts = ({ noHeader }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        // One Field one Column In Row
        { field: 'index', headerName: 'ID', flex: 0.1 },

        {
            field: 'name',
            headerName: 'Name',
            flex: 0.4,
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
            flex: 0.4,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 0.7,
        },
        {
            field: 'address',
            headerName: 'Address',
            flex: 1,
        },
    ];

    return (
        <Box>
            {/* No Header At DashBoard */}
            {!noHeader && <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />}
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
                <DataGrid rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default Contacts;
