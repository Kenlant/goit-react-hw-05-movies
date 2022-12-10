import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
`;

export const InputStyled = styled(Field)`
  padding: 5px;
  font-size: 20px;
  border: 1px solid grey;
  border-right: none;
  outline: none;
`;

export const SubmitBtnStyled = styled.button`
  border: 1px solid grey;
  border-left: none;
`;
