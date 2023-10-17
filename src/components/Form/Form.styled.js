import { styled } from 'styled-components';

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 370px;
  padding: 8px;
  gap: 18px;
  box-shadow: 0px 0px 16px 4px rgba(0,0,0,0.15);
  border-radius: 6px;
`;
export const Title = styled.h3`
font-size: 20px;
font-weight: 500;
line-height: 1.2;
letter-spacing: 0.4px;
margin: 8px 0;
`;

export const FormInput = styled.input`
  border-radius: 4px;
  border: 0;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
`;
export const FormButton = styled.button`
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  &:hover{
    background-color: #2c974b;
  }
  &:focus{
    box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
    outline: none;  }
`;

// <!-- HTML !-->
// <button class="button-3" role="button">Button 3</button>

// /* CSS */
// .button-3 {
//   appearance: none;
//   background-color: #2ea44f;
//   border: 1px solid rgba(27, 31, 35, .15);
//   border-radius: 6px;
//   box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   display: inline-block;
//   font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 20px;
//   padding: 6px 16px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: middle;
//   white-space: nowrap;
// }

// .button-3:focus:not(:focus-visible):not(.focus-visible) {
//   box-shadow: none;
//   outline: none;
// }

// .button-3:hover {
//   background-color: #2c974b;
// }

// .button-3:focus {
//   box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
//   outline: none;
// }

// .button-3:disabled {
//   background-color: #94d3a2;
//   border-color: rgba(27, 31, 35, .1);
//   color: rgba(255, 255, 255, .8);
//   cursor: default;
// }

// .button-3:active {
//   background-color: #298e46;
//   box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
// }