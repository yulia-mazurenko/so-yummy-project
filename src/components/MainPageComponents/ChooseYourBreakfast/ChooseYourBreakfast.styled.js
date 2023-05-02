import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';

export const MainDescRecipes = styled.div`
  position: absolute;

  z-index: 2;
  max-width: 225px;
  max-height: 92px;

  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textDark;
  }};

  background: ${props => {
    return props.theme.darkTheme ? props.theme.colors.bgBlackLight : 'white';
  }};

  @media screen and (max-width: 767px) {
    top: 385px;
    left: 116px;
    border-radius: 8px;
    padding: 8px 8px 28px;
  }

  @media screen and (min-width: 768px) {
    top: 372px;
    left: 125px;
    max-width: 260px;
    max-height: 100px;
    border-radius: 8px;
    padding: 13px 13px 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 1.33;
    max-width: 298px;
    max-height: 114px;
    border-radius: 8px;
    padding: 16px 16px 36px;
    top: 460px;
    left: 310px;
  }
`;

export const TextDescRecipes = styled.p`
  font-family: PoppinsMedium;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  // color: #3e4462;
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textBlue;
  }};
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: 1280px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const DescRecipeAccent = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const RecipesBtn = styled(NavLink)`
  border: ${props => props.theme.borders.none};
  cursor: pointer;
  background: transparent;
  text-decoration: none;
  &:hover,
  &:focus,
  &.active {
    color: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.textWhite
        : props.theme.colors.textBlue;
    }};
  }
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textBlue;
  }};

  margin-top: 7px;
  margin-left: 123px;
  padding: 0px;
  align-items: center;
  font-size: 10px;
  line-height: 12px;

  :hover {
    color: ${props => props.theme.colors.accent};
    transition: ${props => props.theme.effects.mainEffect};
  }

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 10px;
    margin-left: 152px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 175px;
  }
`;

export const ArrowStyled = styled(HiOutlineArrowRight)`
  height: 18px;
  width: 18px;
  margin-left: 4px;
  background-position: right;
  color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.textWhite
      : props.theme.colors.textBlue;
  }};

  @media screen and (min-width: 768px) {
    margin-left: 4px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 7px;
  }
`;
