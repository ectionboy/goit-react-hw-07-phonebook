import Filter from 'components/Filter/Filter'
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
// import { deleteContacts } from 'redux/contacts/slice';
import { ContactsContainer, ContactsListUl, ContactsItem, ContactsButton } from './ContactsList.styled';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/selectors';


const ContactsList = () => {
    const [filtered, setFiltered] = useState([]);
    const { items, isLoading, error } = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    const deleteItem = id => {
      dispatch(deleteContact(id));
    };
  
    useEffect(() => {
        if (filter && items) {
            setFiltered(
          items.filter(el =>
            el.name.toLowerCase().includes(filter.toLowerCase())
          )
        )
        }else {
            setFiltered(items)
        }
        
      }, [filter, items]);

  return (
    <ContactsContainer> 
        <h2>Contacts</h2>
        <Filter />
        <div>
        {isLoading && <p>Loading contacts...</p>}
        {error && <b>{error}</b>}
      <ContactsListUl>
        {filtered &&
          filtered.map(contact => (
            <ContactsItem key={contact.id}>
              <p>
                {contact.name}: {contact.phone}
              </p>
              <ContactsButton 
              onClick={() => deleteItem(contact.id)}
              >Delete</ContactsButton>
            </ContactsItem>
          ))}
      </ContactsListUl>
    </div>

    </ContactsContainer>
  )
}

export default ContactsList