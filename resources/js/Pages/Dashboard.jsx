// import React from 'react';
// import { NavLink, Routes, Route } from 'react-router-dom';
// import Overview from './Dashboard/Overview';
// import Profile from './Dashboard/Profile';

// function Dashboard() {
//     return (
//         <div className="dashboard">
//             <h1>Dashboard</h1>
//             <nav className="dashboard-nav">
//                 {/* NavLink for client-side routing */}
//                 <NavLink to="overview" className="nav-link" activeClassName="active">Overview</NavLink>
//                 <NavLink to="profile" className="nav-link" activeClassName="active">Profile</NavLink>
//             </nav>
//             <div className="dashboard-content">
//                 {/* Define client-side routes */}
//                 <Routes>
//                     <Route path="overview" element={<Overview />} />
//                     <Route path="profile" element={<Profile />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;

// resources/js/Pages/Dashboard.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardRoutes from '../Routes/DashboardRoutes';

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <nav className="dashboard-nav">
                <NavLink to="overview" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Overview
                </NavLink>
                <NavLink to="profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Profile
                </NavLink>
            </nav>
            <div className="dashboard-content">
                <DashboardRoutes /> {/* Integrate the internal Dashboard routes here */}
            </div>
        </div>
    );
}

export default Dashboard;

