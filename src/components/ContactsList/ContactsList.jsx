import Filter from 'components/Filter/Filter'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/slice';
import { ContactsContainer, ContactsListUl, ContactsItem, ContactsButton } from './ContactsList.styled';


const ContactsList = () => {
    const [filtered, setFiltered] = useState([]);
    const { contacts, filter } = useSelector(store => store.contacts);
    const dispatch = useDispatch();
  
    const deleteItem = id => {
      dispatch(deleteContacts(id));
    };
  
    useEffect(() => {
        if (filter && contacts) {
            setFiltered(
          contacts.filter(el =>
            el.name.toLowerCase().includes(filter.toLowerCase())
          )
        )
        }else {
            setFiltered(contacts)
        }
        
      }, [contacts, filter]);

  return (
    <ContactsContainer>
        <h2>Contacts</h2>
        <Filter />
        <div>
      <ContactsListUl>
        {filtered &&
          filtered.map(contact => (
            <ContactsItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ContactsButton onClick={() => deleteItem(contact.id)}>Delete</ContactsButton>
            </ContactsItem>
          ))}
      </ContactsListUl>
    </div>

    </ContactsContainer>
  )
}

export default ContactsList