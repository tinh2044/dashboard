import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Route, Routes } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { LayoutSideBar, NavBar } from './scenes';
import publicRoutes from './routes';
function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <ProSidebarProvider>
                        <div className="app">
                            <LayoutSideBar />
                            <main className="content">
                                <NavBar />
                                <Routes>
                                    {publicRoutes.map((route) => (
                                        <Route key={route.id} path={route.path} element={route.component} />
                                    ))}
                                </Routes>
                            </main>
                        </div>
                    </ProSidebarProvider>
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
