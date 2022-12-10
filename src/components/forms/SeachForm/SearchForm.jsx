import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { FormStyled, InputStyled, SubmitBtnStyled } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ searchTerm: `` }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        onSubmit(values.searchTerm);
      }}
    >
      <FormStyled>
        <InputStyled type="text" name="searchTerm" />
        <SubmitBtnStyled type="submit">Search</SubmitBtnStyled>
      </FormStyled>
    </Formik>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
