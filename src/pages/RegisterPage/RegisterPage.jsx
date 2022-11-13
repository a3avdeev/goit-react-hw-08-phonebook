import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from 'nanoid';
import { signup } from 'redux/authOperations';
import { RegisterFormStyled, RegisterPageWrapper } from './RegisterPageStyled';

export default function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                setName('');
                setEmail('');
                setPassword('');
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup({ name: name, email: email, password: password }));
};

    return (
        <RegisterPageWrapper>
            <RegisterFormStyled onSubmit={handleSubmit}>
                <label htmlFor='{nameId}'>
                    User Name
                </label>
                <input
                    id={nameId}
                    type="text"
                    name="name"
                    value={name}
                    autoComplete="username"
                    onChange={handleChange}
                    title="Enter your Name"
                    placeholder="Enter your Name"
                    required
                />
                <label htmlFor='{numberId}'>
                    User e-mail
                </label>
                <input
                    id={emailId}
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="username"
                    onChange={handleChange}
                    title="Enter valid E-Mail"
                    placeholder="Enter valid E-Mail"
                    required
                />
                <label htmlFor='{numberId}'>
                    User password
                </label>
                <input
                    id={passwordId}
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={handleChange}
                    title="Enter minimum 7 simbols"
                    placeholder="Enter your password"
                    required
                />
                <button type="submit">Click to register</button>
            </RegisterFormStyled>
            <ToastContainer autoClose={3000} />
        </RegisterPageWrapper>
    )
};