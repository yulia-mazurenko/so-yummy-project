import styled from 'styled-components';
import { Field } from 'formik';
import Select from 'react-select';
import { ReactComponent as CrossIcon } from '../../../../assets/svg/other/cross.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/svg/other/plus.svg';
import { ReactComponent as MinusIcon } from '../../../../assets/svg/other/minus.svg';



export const CrossIconStyled = styled(CrossIcon)`
  width: 18px;
  height: 18px;
  stroke: ${props => {
    return props.theme.darkTheme ? props.theme.colors.textWhite : '#333333';
  }};

 
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
   
  }
  &:hover{
    stroke: ${props => {
      return  props.theme.colors.accent ;
    }};
  transition: fill ${props => props.theme.effects.mainEffect};
 }


`;


export const PlusIconStyled = styled(PlusIcon)`
  width: 14px;
  height: 14px;

stroke: ${props => {
      return  props.theme.colors.accent ;
    }};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
   
  }
  

  

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
   
  }


`;

export const MinusIconStyled = styled(MinusIcon)`
  width: 14px;
  height: 14px;
  
    stroke: ${props => {
return props.theme.darkTheme ? props.theme.colors.textWhite : '#333333';
}};
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
   
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 343px;
  height: 28px;
  margin-top: 67px;
  margin-bottom: 24px;
  justify-content: space-between;
  outline: none;

  border: none;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 36px;
    margin-bottom: 32px;
    margin-top: 104px;
  }

  @media screen and (min-width: 1280px) {
    width: 609px;
  }
`;

export const StyledItemWrapper = styled.li`
  display: flex;

  width: 343px;
  height: 53px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 59px;
  }

  @media screen and (min-width: 1280px) {
    width: 609px;
  }
`;

export const StyledIngredientsField = styled(Field)`
  display: flex;
  gap: 32px;

  @media screen and (min-width: 1280px) {
  }
`;

export const StyledMeasureField = styled(Field)`
  display: flex;
  text-align: end;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 14px;

  outline: none;

  width: 30px;
  padding-left: 10px;
  padding-right: 0px;
  border: none;

  background-color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : 'rgba(217, 217, 217, 0)';
  }};

  color: ${props => {
    return props.theme.darkTheme ? '#d9d9d999' : '#00000080';
  }};

  @media screen and (min-width: 768px) {
    width: 35px;
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  outline: ${props => {
    return props.theme.darkTheme
      ? '1px solid rgba(250, 250, 250, 0.2)'
      : ' none';
  }};
  border-radius: 6px;
  border: none;

  
`;

export const SelectMeasureWrapper = styled(SelectWrapper)`
  align-items: baseline;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 21px;
  margin-left: 14px;
  margin-right: 33px;
  width: 84px;
  border-radius: 6px;
  background-color: ${props => {
    return props.theme.darkTheme
      ? props.theme.colors.bgdarkTheme
      : 'rgba(217, 217, 217, 0.16)';
  }};
  transition: fill ${props => props.theme.effects.mainEffect};
  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-right: 157px;
    width: 99px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 60px;
  }
  &:hover {
        color: ${props => props.theme.colors.bgBlackDark};
      }

 

    &:focus-within .Select__input-container,  &:focus-within .Select__placeholder, &:focus-within input{
      
      color: ${props => {
        return props.theme.darkTheme ? props.theme.colors.textWhite :  props.theme.colors.textDark;
      }};
    }

 

  }

`;

export const StyledCounterWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  width: 92px;
  height: 28px;
  padding-right: 14px;
  padding-left: 14px;
  border-radius: 18px;
  border: 1px solid;

  border-color: ${props => {
    return props.theme.darkTheme ? '#d9d9d999' : '#3333334D';
  }};

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 36px;

  }
`;

export const StyledCounterButton = styled.button`
  outline: none;
  border: none;
  background: none;
  background-color: Transparent;
  margin: 0;
  padding: 0;
 
`;

export const StyledCounterWindow = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 18px;

  color: ${props => {
    return props.theme.darkTheme ? props.theme.colors.textWhite : '#333333';
  }};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const StyledDeleteButton = styled.button`
  outline: none;
  border: none;
  background: none;
  background-color: Transparent;
  margin: 0;
  padding: 0;
  width: 18px;
  height: 18px;
  

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  transition: fill ${props => props.theme.effects.mainEffect};
  &:hover{
    color: ${props => {
      return props.theme.darkTheme ? props.theme.colors.textWhite : '#00000080';
    }};

  }
`;

export const StyledListWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 343px;

  justify-content: space-between;
  outline: none;
  border: none;

  border-color: #e0e0e0;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const StyledSelect = styled(Select)`
  .Select__control {
    padding-left: 16px;
    padding-right: 16px;
    outline: green;
    height: 53px;
    width: 194px;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    border: none;
    font-family: PoppinsRegular;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1;
    letter-spacing: -0.02em;
    box-shadow: none;
    border-radius: 8px;
    color: ${props => {
      return props.theme.darkTheme ? '#000' : '#d9d9d999';
    }};
    background-color: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.bgdarkTheme
        : 'rgba(217, 217, 217, 0.16)';
    }};


 

    @media screen and (min-width: 767px) {
      padding-left: 18px;
      font-size: ${props => props.theme.fontSizes.m};
      height: 59px;
      width: 398px;
    }

    &--is-focused .Select__input-container {
      background-color: transparent;
      color: ${props => {
        return props.theme.darkTheme ? props.theme.colors.textWhite :  props.theme.colors.textDark;
      }};
    }

    &--is-focused .Select__placeholder {
      background-color: transparent;
      color: ${props => {
        return props.theme.darkTheme ? props.theme.colors.textWhite :  props.theme.colors.textDark;
      }};
    }
  }

  .Select__single-value {
    padding-bottom: 10px;
  }

  .Select__option {
    padding: 0;
    padding-bottom: 4px;
    font-family: PoppinsRegular;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 1.5;
    letter-spacing: -0.02em;

    opacity: 0.5;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.s};
    }
    &--is-focused {
      background-color: transparent;
      color: ${props => {
        return props.theme.darkTheme ? props.theme.colors.textWhite :  props.theme.colors.accent;
      }};
    }
  }

  .Select__menu {
    position: absolute;
    top: 53px;
    right: 0px;
    width: 194px;
    height: 154px;
    margin: 0;
    padding: 8px 4px 8px 18px;
    background-color: ${props => {
      return props.theme.darkTheme ? props.theme.colors.accent : '#fff';
    }};
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    border-radius: 6px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      top: 59px;
      width: 398px;
      height: 172px;
    }
  }

  .Select__menu-list {
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.fontSizes.xs};
    overflow-y: scroll;
    background-color: ${props => {
      return props.theme.darkTheme ? props.theme.colors.accent : '#fff';
    }};
 height: 135px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      height: 150px;

      font-size: ${props => props.theme.fontSizes.s};
    }
  }
  .Select__menu-list::-webkit-scrollbar {
    width: 4px;
    height: 93px;
  }
  .Select__menu-list::-webkit-scrollbar-track {
    color: ${props => {
      return props.theme.darkTheme ? props.theme.colors.bgdarkTheme : '#e7e5e5';
    }};
  }
  .Select__menu-list::-webkit-scrollbar-thumb {
    background: ${props => {
      return props.theme.darkTheme ? props.theme.colors.bgdarkTheme : '#e7e5e5';
    }};

    border-radius: 2px;
    width: 4px;
    height: 93px;
  }

  .Select__dropdown-indicator {
    padding-right: 5px;
    padding-left: 5px;
    margin-left: -3px;
    margin-bottom: 0;
    color: ${props => props.theme.colors.accent};
    cursor: pointer;
  }

  .Select__indicator-separator {
    display: none;
  }
  .Select__indicator {
    padding-right: 3px;
    padding-left: 0px;
    margin: 0;
  }

  .Select__value-container {
    padding: 0;
    margin-left: 0;
    
  }

  .Select__input-container {
    color: ${props => {
      return props.theme.darkTheme ? '#d9d9d999' : '#01010180';
    }};
    height: 53px;
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 21px;
    padding: 0;
    margin: 0;
 @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.l};
    }

    .Select__control--is-focused{
      color: ${props => {
        return props.theme.darkTheme ? props.theme.colors.textWhite :  props.theme.colors.accent;
      }};
    }
    
    
  }
  .Select__placeholder {
    padding-left: 0px;
    padding-bottom: 0px;
    font-family: PoppinsRegular;
    font-weight: 400;
    line-height: 1;
    color: ${props => {
      return props.theme.darkTheme ? '#d9d9d999' : '#00000080';
    }};

 
  &:focus {
    color: ${props => {
      return props.theme.darkTheme ? '#ff0000' : '#ff0000';
    }};
}


    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.l};
    }


`;

export const StyledSelectMeasures = styled(StyledSelect)`
  .Select__control {
    width: 54px;
    padding-left: 0;
    padding-right: 8px;
    background-color: ${props => {
      return props.theme.darkTheme
        ? props.theme.colors.bgdarkTheme
        : 'rgba(217, 217, 217, 0)';
    }};

    @media screen and (min-width: 768px) {
      width: 62px;
    }
    .Select__input-container {
      margin-right: 5px;
    }
  }

  .Select__menu {
   
    width: 84px;
    height: 112px;
    padding-left: 28px;

    @media screen and (min-width: 768px) {
      width: 97px;
      height: 128px;
    }
    .Select__menu-list { 
       margin-top: 12px; 
      height: 100px;
      overflow: hidden;
      
      @media screen and (min-width: 768px) {
        height: 100px;
  
        
      }
  }
`;

export const SubTitleStyled = styled.h3`


margin-bottom: 0px;
  font-family: PoppinsSemiBold;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props =>
    props.theme.darkTheme ? props.theme.colors.textWhite : '#3e4462'};


`;
