import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import { css } from '@emotion/react';
import { Sidebar } from '../Components/Sidebar/Sidebar';
import { SettingsPage } from '../Pages/SettingsPage';

export const AppRouter = () => {
  return (
    <div
      css={css`
        background-color: white;
        display: grid;
        grid-template-columns: 15% 85%;
        width: 100vw;
        height: 100vh;
      `}
    >
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="*" element={<h1>Nada por aqui</h1>} />
        </Routes>
      </Router>
    </div>
  );
};
