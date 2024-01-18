import { useDispatch, useSelector } from 'react-redux';
import { Item, ButtonList } from './ContactsList.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';


export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const dispatch = useDispatch();

  return (
    <ul>
      {filteredContacts.map(contact => { 
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <ButtonList onClick={() => dispatch(deleteContact(id))}>Delete</ButtonList>
          </Item>
        );
      })}
    </ul>
  );
};
