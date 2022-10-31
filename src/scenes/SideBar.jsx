import React, { useState } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar/';
import {
    BarChartOutlined,
    CalendarTodayOutlined,
    ContactPageOutlined,
    ContactsOutlined,
    DatasetOutlined,
    HelpOutlineOutlined,
    HomeOutlined,
    MapOutlined,
    MenuOutlined,
    PeopleOutlined,
    PersonOutlined,
    PieChartOutlineOutlined,
    ReceiptOutlined,
    SsidChartOutlined,
    TimelineOutlined,
} from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import { tokens } from '../theme';

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Link to={to}>
            <MenuItem
                active={selected === title}
                style={{
                    color: colors.grey[100],
                }}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                {!isCollapsed && <Typography variant="h6">{title}</Typography>}
            </MenuItem>
        </Link>
    );
};
const ListItemSideBar = [
    {
        id: v4(),
        title: 'Data',
        icon: <DatasetOutlined />,
        item: [
            {
                id: v4(),

                title: 'Manage Team',
                to: '/team',
                icon: <PeopleOutlined />,
            },
            {
                id: v4(),

                title: 'Contacts Information',
                to: '/contact',
                icon: <ContactsOutlined />,
            },
            {
                id: v4(),

                title: 'Invoices Balances',
                to: '/invoices',
                icon: <ReceiptOutlined />,
            },
        ],
    },
    {
        id: v4(),

        title: 'Pages',
        icon: <ContactPageOutlined />,
        item: [
            {
                id: v4(),

                title: 'Profile Form',
                to: '/form',
                icon: <PersonOutlined />,
            },
            {
                id: v4(),

                title: 'Calendar',
                to: '/calendar',
                icon: <CalendarTodayOutlined />,
            },
            {
                id: v4(),

                title: 'FAQ Page',
                to: '/faq',
                icon: <HelpOutlineOutlined />,
            },
        ],
    },
    {
        id: v4(),

        title: 'Charts',
        icon: <SsidChartOutlined />,
        item: [
            {
                id: v4(),

                title: 'Bar Chart',
                to: '/bar-chart',
                icon: <BarChartOutlined />,
            },
            {
                id: v4(),

                title: 'Pie Chart',
                to: '/pie-chart',
                icon: <PieChartOutlineOutlined />,
            },
            {
                id: v4(),

                title: 'Line Chart',
                to: '/line-chart',
                icon: <TimelineOutlined />,
            },
            {
                id: v4(),

                title: 'Geography Chart',
                to: '/geo-chart',
                icon: <MapOutlined />,
            },
        ],
    },
];
function LayoutSideBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState('Dashboard');
    const [showMenu, setShowMenu] = useState('');

    return (
        <Box
            backgroundColor={colors.primary[400]}
            // Responsive SideBar
            width={window.innerWidth > 1023 && !isCollapsed ? '230px' : '40px'}
            // OverWrite Css of Sidebar
            sx={{
                '& .sidebar': {
                    width: isCollapsed ? '40px' : '230px',
                    minWidth: '1%',
                    borderRight: 'none',

                    '&-inner': {
                        width: '100%',
                        height: '100vh',
                        overflowY: 'scroll',
                    },
                },
                '& .menu-item': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingRight: '12px',

                    '.menu-anchor': {
                        p: 0,
                        width: '100%',

                        '&:hover': {
                            transition: 'all 0s linear',
                            color: `#868dfb !important`,
                            backgroundColor: 'transparent',
                        },
                    },

                    '&:has( .active)': {
                        color: '#6870fa !important',
                    },
                },

                '& .active .menu-anchor': {
                    color: '#6870fa !important',
                    backgroundColor: 'transparent',
                },
                '& .sub-menu-content': {
                    backgroundColor: `${colors.primary[400]} !important`,
                    paddingLeft: '8px',
                },
            }}
        >
            <Sidebar collapsedWidth="70px" backgroundColor={colors.primary[400]}>
                <Menu>
                    {/* LOGO AND MENU ICON */}
                    {isCollapsed ? (
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlined /> : undefined}
                            style={{
                                padding: 0,
                                color: colors.grey[100],
                            }}
                        />
                    ) : (
                        <MenuItem>
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Typography variant="h5" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        </MenuItem>
                    )}

                    {!isCollapsed && (
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            {/* Avatar And Name */}
                            <Avatar
                                sx={{ width: '100px', height: '100px' }}
                                src="https://mega.com.vn/media/news/1706_hinh-nen-dien-thoai-4k133.jpg"
                            />
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
                                    Ed Roh
                                </Typography>
                                <Typography align="center" variant="h5" color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    {/* Item SideBar */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'} mt={2}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        {/* Render List Menus */}
                        {ListItemSideBar.map((menuItem) => (
                            <SubMenu
                                open={showMenu === menuItem.title ? true : false}
                                label={menuItem.title}
                                key={menuItem.id}
                                icon={menuItem.icon}
                                // Handle Show Menu
                                onClick={() => setShowMenu((prev) => (prev !== menuItem.title ? menuItem.title : ''))}
                            >
                                {/* Render List Menu Item */}
                                {menuItem.item.map(({ title, to, icon, id }) => (
                                    <Item
                                        key={id}
                                        title={title}
                                        to={to}
                                        icon={icon}
                                        selected={selected}
                                        setSelected={setSelected}
                                        isCollapsed={isCollapsed}
                                    />
                                ))}
                            </SubMenu>
                        ))}
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
}

export default LayoutSideBar;
