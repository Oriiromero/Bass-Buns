import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            {/* here will be the nav bar */}
            <Outlet />
        </div>
    )
}

export default Layout;
