// CoffeePage.jsx

import { CoffeePageWrapper, Title, CoffeeList, CoffeeItem } from '../styles/CoffeePageStyles';

const CoffeePage = () => {
  return (
    <CoffeePageWrapper>
      <Title>Coffee Menu</Title>
      <CoffeeList>
        <CoffeeItem>Coffee 1</CoffeeItem>
        <CoffeeItem>Coffee 2</CoffeeItem>
        <CoffeeItem>Coffee 3</CoffeeItem>
      </CoffeeList>
    </CoffeePageWrapper>
  );
};

export default CoffeePage;
