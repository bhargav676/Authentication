import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './Login';
import Myprofile from './Myprofile';

export const store = createContext();

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token')); // Retrieve token from localStorage

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    return (
        <div>
            <store.Provider value={[token, setToken]}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/register' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/profile' element={<Myprofile />} />
                    </Routes>
                </BrowserRouter>
            </store.Provider>
        </div>
    );
}

export default App;
