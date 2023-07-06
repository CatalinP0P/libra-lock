import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/signin"
                            element={<label>Sign in page</label>}
                        />
                        <Route
                            path="*"
                            element={<label>Error 404: Page not found</label>}
                        />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
