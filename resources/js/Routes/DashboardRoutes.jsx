// resources/js/Routes/DashboardRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from '../Pages/Dashboard/Overview';
import Profile from '../Pages/Dashboard/Profile';

function DashboardRoutes() {
    return (
        <Routes>
            <Route path="overview" element={<Overview />} />
            <Route path="profile" element={<Profile />} />
        </Routes>
    );
}

export default DashboardRoutes;
