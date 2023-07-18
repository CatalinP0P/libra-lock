import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import Book from './pages/Book/Book';
import SignUp from './pages/Auth/SignUp';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { PopupProvider } from './context/PopupContext';
import BuyCoins from './pages/BuyCoins/BuyCoins';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <PopupProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="*"
                                element={
                                    <label>Error 404: Page not found</label>
                                }
                            />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/buycoins" element={<BuyCoins />} />
                            <Route path="/:id" element={<Book />} />
                        </Routes>
                    </BrowserRouter>
                </PopupProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
