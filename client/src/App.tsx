import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import Book from './pages/Book/Book';
import SignUp from './pages/Auth/SignUp';
import './index.css';
import NotFound from './pages/Error/NotFound';
import { AuthProvider } from './context/AuthContext';
import { PopupProvider } from './context/PopupContext';
import BuyCoins from './pages/BuyCoins/BuyCoins';
import Books from './pages/Books/Books';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <PopupProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/buycoins" element={<BuyCoins />} />
                            <Route path="/books" element={<Books />} />
                            <Route path="/book/:id" element={<Book />} />
                            <Route
                                path="/contact"
                                element={<label>Contact</label>}
                            />
                            <Route
                                path="/why-us"
                                element={<label>Why us</label>}
                            />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </PopupProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
