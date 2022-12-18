import { useNavigate } from 'react-router-dom';
import { GoBackBtnStyled } from './GoBackBtn.styled';

export default function GoBackBtn() {
  const navigate = useNavigate();

  return (
    <GoBackBtnStyled type="button" onClick={() => navigate(-1)}>
      <span>&larr; Go Back</span>
    </GoBackBtnStyled>
  );
}
