
import IngredientsApi from '../services/IngredienstApi';
import { IngredientPageWrapper, Title, IngredientList, IngredientItem } from '../styles/IngredientPageStyles';

const IngredientPage = () => {
  return (
    <IngredientPageWrapper>
      <Title>Ingredients</Title>
      <IngredientList>
        <IngredientItem><IngredientsApi/></IngredientItem>
      </IngredientList>
    </IngredientPageWrapper>
  );
};

export default IngredientPage;
