import { CameraIconStyled } from 'components/AddRecipePageComponents/AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields.styled';
import { getHoursFromMins } from '../../../helpers/helper';
import {
  DeleteButton,
  InfoCardWrapper,
  RecipeCardWrapper,
  RecipeTitle,
  StubBox,
  StyledDeleteIcon,
  StyledDescription,
  StyledLink,
  StyledPicture,
  StyledTimeText,
  TextWrapper,
  TimeLinkWrapper,
} from './RecipeCard.styled';

export const RecipeCard = ({
  preview,
  title,
  description,
  time,
  _id,
  type,
  onClick,
}) => {
  const timeInHours = getHoursFromMins(time);

  return (
    <RecipeCardWrapper key={_id}>
      {preview ? (
        <StyledPicture src={preview} alt="recipe" loading="lazy" />
      ) : (
        <StubBox>
          <CameraIconStyled />
        </StubBox>
      )}
      <InfoCardWrapper>
        <DeleteButton type={type} onClick={() => onClick(_id)}>
          <StyledDeleteIcon type={type} />
        </DeleteButton>
        <TextWrapper>
          <RecipeTitle>{title}</RecipeTitle>
          {description && <StyledDescription>{description}</StyledDescription>}
        </TextWrapper>
        <TimeLinkWrapper>
          <StyledTimeText>{timeInHours}</StyledTimeText>
          <StyledLink type={type} to={`/recipe/${_id}`}>
            <div className="inner">See recipe</div>
          </StyledLink>
        </TimeLinkWrapper>
      </InfoCardWrapper>
    </RecipeCardWrapper>
  );
};
