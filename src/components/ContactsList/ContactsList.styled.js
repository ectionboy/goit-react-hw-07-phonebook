import { styled } from 'styled-components';

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  padding: 8px;
  gap: 8px;
  `;
export const ContactsListUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    margin: 0;
  `;
export const ContactsItem = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
gap: 32px;
margin-left: 5px;
padding: 8px;
box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.5);
border-radius: 10px 10px 10px 10px;
`;
export const ContactsButton = styled.button`
background-color: #f44336f0; 
border: none;
color: white;
padding: 0 4px;
height: 24px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 12px;
&:hover{
    background-color: #f44336;
}
`;



