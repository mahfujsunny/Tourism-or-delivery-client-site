import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { googleSignIn } = useAuth();

    return (
        <div>
            <button className="mb-3 btn-secondary" onClick={googleSignIn}><i className="fab fa-google text-info"></i> Google Sign In</button>
        </div>
    );
};

export default Login;