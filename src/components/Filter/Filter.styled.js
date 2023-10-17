import { styled } from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  padding: 8px;
  gap: 8px;
  `;
export const FilterLabel = styled.label`
font-size: 16px;
font-weight: 400;
line-height: 1.5;
letter-spacing: 0.32px;
`;
export const FilterInput = styled.input`
  width: 148px;
  border-radius: 4px;
  border: 0;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
  `;