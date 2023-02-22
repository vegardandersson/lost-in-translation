import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import LtNavBar from './components/LtNavBar';
import TranslationPage from './pages/TranslationPage';
import ProfilePage from './pages/ProfilePage';
import TranslationProvidor from './context/TranslationProvider';

function App() {
  return (
    <div className="app">
      <div className='app-centered-container'>
        <BrowserRouter>
          <TranslationProvidor>
            <Routes>
              <Route path='/'>
                <Route index element={<LoginPage/>}/>
                <Route path='nav'  element={<LtNavBar/>}>
                  <Route path='translate' element={<TranslationPage/>}/>
                  <Route path='profile' element={<ProfilePage/>}/>
                </Route>
              </Route>
            </Routes>
          </TranslationProvidor>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
