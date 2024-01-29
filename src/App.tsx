import React from 'react';
import HomePage from './components/HomePage';
import ExplorePage from './components/ExplorePage';
import AboutPage from './components/AboutPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import Override from './components/Override';
import { ThemeProvider } from '@emotion/react';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Override}>
      <div id="App">
        {/* <div className="">
          <NavBar />
        </div> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
