import React from 'react'
import LoginForm from '../../components/login/login';
import RegistrationForm from '../../components/login/register';
import "./user.css";
import Reset from '../../components/login/Reset';

const User = () => {
    const [option, setOption] = React.useState(1);

    return (
        <div className="user">
            <div className='user-container'>
                <header>
                    <div className={'header-headings ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot'))}>
                        <span>Sign in to your account</span>
                        <span>Create an account</span>
                        <span>Reset your password</span>
                    </div>
                </header>
                <ul className='options'>
                    <li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</li>
                    <li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>
                    <li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</li>
                </ul>
                {option === 1 && <LoginForm />}
                {option === 2 && <RegistrationForm />}
                {option === 3 && <Reset />}
            </div>
        </div>
    );
}

export default User;
