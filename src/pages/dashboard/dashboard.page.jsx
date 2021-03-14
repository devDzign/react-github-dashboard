import React from 'react';
import loadingImage from '../../assets/images/preloader.gif';

// Components

import { Navbar, Search, User, UserInfo } from '../../components'


const DashboardPage = () => {
    return (
        <main>
            <Navbar/>
            <Search/>
            <UserInfo/>
            <User/>

        </main>
    );
};

export default DashboardPage;
