import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import UsuarioContext from './contexts/UsuarioContext';
import Cocteles from './sections/Cocteles/Cocteles';
import Pagina404 from './sections/Pagina404/Pagina404';
import Series from './sections/Series/Series';
import SobreMi from './sections/SobreMi/SobreMi';
import RickAndMorty from './sections/RickAndMorty/RickAndMorty';

import './styles.css';

function App() {
    const userName = 'Milton';
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    function userLogIn() {
        setIsUserLoggedIn(true);
    }

    function userLogOut() {
        setIsUserLoggedIn(false);
    }

    return (
        <UsuarioContext.Provider value={{ userName, isUserLoggedIn, userLogIn, userLogOut }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="series" replace />} />
                    <Route path="series" element={<Series />} />
                    <Route path="cocteles" element={<Cocteles />} />
                    <Route path="sobremi" element={<SobreMi />} />
                    <Route path="rickandmorty" element={<RickAndMorty />} />
                    <Route path="*" element={<Pagina404 />} />
                </Routes>
            </BrowserRouter>
        </UsuarioContext.Provider>
    );
}

export default App;
