import { v4 } from 'uuid';
import {
    BarChart,
    Calendar,
    Contacts,
    Dashboard,
    Faq,
    FormAdd,
    GeoChart,
    Invoices,
    LineChart,
    PieChart,
    Team,
} from '../scenes';
const routes = {
    dashboard: '/',
    team: '/team',
    contact: '/contact',
    invoices: '/invoices',
    form: '/form',
    calendar: '/calendar',
    faq: '/faq',
    barChart: '/bar-chart',
    pieChart: '/pie-chart',
    lineChart: '/line-chart',
    geoChart: '/geo-chart',
};

const publicRoutes = [
    {
        id: v4(),
        path: routes.dashboard,
        component: <Dashboard />,
    },
    {
        id: v4(),
        path: routes.team,
        component: <Team />,
    },
    {
        id: v4(),
        path: routes.contact,
        component: <Contacts />,
    },
    {
        id: v4(),
        path: routes.invoices,
        component: <Invoices />,
    },
    {
        id: v4(),
        path: routes.form,
        component: <FormAdd />,
    },
    {
        id: v4(),
        path: routes.calendar,
        component: <Calendar />,
    },
    {
        id: v4(),
        path: routes.faq,
        component: <Faq />,
    },
    {
        id: v4(),
        path: routes.barChart,
        component: <BarChart />,
    },
    {
        id: v4(),
        path: routes.pieChart,
        component: <PieChart />,
    },
    {
        id: v4(),
        path: routes.lineChart,
        component: <LineChart />,
    },
    {
        id: v4(),
        path: routes.geoChart,
        component: <GeoChart />,
    },
];

export default publicRoutes;
