import PropTypes from 'prop-types';
import { ContainerStyled } from './Container.styled';

export default function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
