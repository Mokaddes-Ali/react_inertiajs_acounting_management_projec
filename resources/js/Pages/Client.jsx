import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Profile from './Dashboard/Profile';
import Overview from './Dashboard/Overview';


function Client() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <nav className="dashboard-nav">
                {/* NavLink for client-side routing */}
                <NavLink to="overview" className="nav-link" activeClassName="active">Overview</NavLink>
                <NavLink to="profile" className="nav-link" activeClassName="active">Profile</NavLink>
            </nav>
            <div className="dashboard-content">
                {/* Define client-side routes */}
                <Routes>
                    <Route path="overview" element={<Overview />} />
                    <Route path="profile" element={<Profile />} />

                </Routes>
            </div>
        </div>
    );
}

export default  Client;
