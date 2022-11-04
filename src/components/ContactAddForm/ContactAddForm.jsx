import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactAddForm.Styled";
import {useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from 'redux/contactsOperations';

export default function ContactAddForm() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const nameId = nanoid();
    const numberId = nanoid();

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                setName('');
                setPhone('');
        };
    };

    const inContacts = ({ name, phone }) => {
        return contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase() || item.phone === phone);
    };

    const addNewContact = ({name, phone }) => {
        if (inContacts({ name, phone })) {
            return toast.error(`${name} is already in contacts`, {
                theme: "colored"
            });

        };
        dispatch(addContact({ name, phone }));
        toast.success(`${name} successfuly added to your list`, {
            theme: "colored"
        });
        setName('');
        setPhone('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewContact({ name, phone });
};

    return (
        <>
            <ContactForm onSubmit={handleSubmit}>
                <label htmlFor='{nameId}'>
                    Name
                </label>
                <input
                    id={nameId}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Enter New Name"
                    required
                />
                <label htmlFor='{numberId}'>
                    Phone Number
                </label>
                <input
                    id={numberId}
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="Enter New Phone Number"
                    required
                />
                <button type="submit">Add contact</button>
            </ContactForm>
            <ToastContainer autoClose={3000} />
        </>
    )
};