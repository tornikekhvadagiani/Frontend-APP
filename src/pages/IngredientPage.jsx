
import { IngredientPageWrapper, Title, IngredientList, IngredientItem } from '../styles/IngredientPageStyles';

const IngredientPage = () => {
  return (
    <IngredientPageWrapper>
      <Title>Ingredients</Title>
      <IngredientList>
        <IngredientItem>Ingredient 1</IngredientItem>
        <IngredientItem>Ingredient 2</IngredientItem>
        <IngredientItem>Ingredient 3</IngredientItem>
      </IngredientList>
    </IngredientPageWrapper>
  );
};

export default IngredientPage;
