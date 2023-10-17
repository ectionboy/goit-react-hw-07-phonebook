import ContactsList from "./ContactsList/ContactsList";
import Form from "./Form/Form";
import { Container } from './App.styled';


export const App = () => {
  
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <ContactsList />
    </Container>
  );
};
