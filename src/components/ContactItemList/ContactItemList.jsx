import { ContactList } from "./ContactItemList.Styled";
import { useSelector } from 'react-redux';
import * as contactsSelectors from "redux/selectors";
import { Contact } from "./ContactItem";
import { IoMdPersonAdd } from 'react-icons/io';

// import { fetchContacts } from "redux/contactsOperations";
// import { useEffect } from "react";

export const ContactItemList = () => {
    const filter = useSelector(contactsSelectors.getFilter);
    const contacts = useSelector(contactsSelectors.getContacts);
    const contactAdding = useSelector(contactsSelectors.getAdding);
    // const dispatch = useDispatch();
    // console.log(contacts)

    // useEffect(() => {
    //     dispatch(fetchContacts());
    // }, [dispatch]);

    const getFilteredContacts = () => {
        if (!filter) {
            return contacts;
        }
        const normalFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name }) => {
            const normalName = name.toLocaleLowerCase().includes(normalFilter);
            return normalName;
        })
        // console.log('фильтр activated')
        return filteredContacts;
    }

    const contactsToRender = getFilteredContacts();

return (
    <>
        <ContactList>
            {contactsToRender?.map(contact => (
                <div key={contact.id}>
                    <Contact contact={contact}/>
                </div>
            ))}
            {contactAdding && <b style={{fontSize: '1.2em', color: "green", margin: '20px,'}}>Adding new contact...  <IoMdPersonAdd /></b>}
        </ContactList>
    </>
);
};
