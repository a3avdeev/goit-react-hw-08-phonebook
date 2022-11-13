import { BsFillPersonFill } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "../../redux/contactsOperations";
import { getIsLoading } from 'redux/selectors';
import { useState } from 'react';
import { useEffect } from 'react';

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const [deletingItem, setDeletingItem] = useState('');

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
        setDeletingItem(contact.id);
        toast.warn(`${contact.name} deleted from your list`, {
            theme: "colored"
        });
    }

    useEffect(() => {
        if (!isLoading) {
            setDeletingItem('')
        }
    }, [isLoading]);

return (
    <li key={contact.id} >
        <BsFillPersonFill />
        <p>{contact.name}: {contact.number}</p>
        <button type="button" onClick={handleDelete}>{deletingItem === contact.id ? <span>Deleting...</span> : <span>Delete</span>}</button>
        <ToastContainer autoClose={3000} />
    </li>
);

}


