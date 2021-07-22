import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const Signin1 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless text-center">
                        <Card.Body>
                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email address" />
                            </div>
                            <div className="input-group mb-4">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <p className="mb-2 text-muted">
                                Forgot password?
                                <NavLink to="#" className="f-w-400">
                                    Reset
                                </NavLink>
                            </p>
                            <p className="mb-0 text-muted">
                                Don’t have an account?
                                <NavLink to="/auth/signup-2" className="f-w-400">
                                    Signup
                                </NavLink>
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signin1;
