import styled from 'styled-components';
import {
  FormTitle,
  LinkStyled,
} from '../../RegisterPageComponents/RegisterForm/RegisterForm.styled';

export const SigninTitle = styled(FormTitle)`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const LinkRegisterStyled = styled(LinkStyled)`
  bottom: -50px;
  right: 105px;

  @media screen and (min-width: 768px) {
    bottom: -50px;
    right: 192px;
  }
`;
