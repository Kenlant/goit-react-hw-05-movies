import { Outlet } from 'react-router-dom';
import Container from 'components/infrastracture/Container/Container';
import Header from '../../common/Header/Header';

export default function SharedLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
