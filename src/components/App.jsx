import ContactsList from "./ContactsList/ContactsList";
import Form from "./Form/Form";
import { Container } from './App.styled';
// import { getAllContacts } from "redux/contacts/slice";
// import { useDispatch } from "react-redux";


export const App = () => {
  // const dispatch = useDispatch();

  // const aaa = () => {
  //   dispatch(getAllContacts());
  // };
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <ContactsList />
{/* <button onClick={aaa()}></button> */}
    </Container>
  );
};
