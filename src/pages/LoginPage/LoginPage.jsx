import { useState } from 'react';
import {useDispatch } from 'react-redux';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from 'nanoid';
import { login } from 'redux/authOperations';
import { LoginFormStyled } from './LoginPageStyled';

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const numberId = nanoid();
    const passwordId = nanoid();

    const dispatch = useDispatch();
    // const contacts = useSelector(getContacts);

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                setEmail('');
                setPassword('');
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email: email, password: password }));
        setEmail('');
        setPassword('');
};

    return (
        <>
            <LoginFormStyled onSubmit={handleSubmit}>
                <label htmlFor='{numberId}'>
                    User e-mail
                </label>
                <input
                    id={numberId}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="Invalid email address. Must content @"
                    placeholder="Enter your e-mail"
                    required
                />
                <label htmlFor='{numberId}'>
                    User password
                </label>
                <input
                    id={passwordId}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />
                <button type="submit">Click to Login</button>
            </LoginFormStyled>
            <ToastContainer autoClose={3000} />
        </>
    )
};