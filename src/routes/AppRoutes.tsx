import React from 'react'
import { Routes, Route } from 'react-router';
import LandingPage from '../pages/LandingPage/LandingPage';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import PublicLayout from '../layouts/PublicLayout';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route element={<PublicLayout />}>
          <Route path="/landing" element={<LandingPage />} />
        </Route>
      </Routes>
  )
}

export default AppRoutes
