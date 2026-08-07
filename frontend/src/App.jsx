import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

import ChatWidget from './components/ChatBot/ChatWidget'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <ChatWidget />
        </div>
    );
}

export default App         