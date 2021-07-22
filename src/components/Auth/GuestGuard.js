import React from 'react';
import { Redirect } from 'react-router-dom';
import { BASE_URL } from '../../config/constant';

import useAuth from '../../hooks/useAuth';

const GuestGuard = ({ children }) => {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn) {
        return <Redirect to={BASE_URL} />;
    }

    return <React.Fragment>{children}</React.Fragment>;
};

export default GuestGuard;
