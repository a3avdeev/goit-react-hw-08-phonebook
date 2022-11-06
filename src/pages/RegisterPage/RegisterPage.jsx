import { useState } from 'react';
import {useDispatch } from 'react-redux';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from 'nanoid';
import { signup } from 'redux/authOperations';
import { RegisterFormStyled } from './RegisterPageStyled';

export default function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameId = nanoid();
    const numberId = nanoid();
    const passwordId = nanoid();

    const dispatch = useDispatch();
    // const contacts = useSelector(getContacts);

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
        setName('');
        setEmail('');
        setPassword('');
};

    return (
        <>
            <RegisterFormStyled onSubmit={handleSubmit}>
                <label htmlFor='{nameId}'>
                    User Name
                </label>
                <input
                    id={nameId}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Enter your Name"
                    required
                />
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
                    value={password}
                    onChange={handleChange}
                    pattern="{5,16}"
                    title="The total length should be greater than or equal to 5 and less or equal to 16"
                    placeholder="Enter your password"
                    required
                />
                <button type="submit">Click to register</button>
            </RegisterFormStyled>
            <ToastContainer autoClose={3000} />
        </>
    )
};