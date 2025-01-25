// CoffeePage.jsx

import CoffeApi from '../services/CoffeApi';
import { CoffeePageWrapper, Title, CoffeeList, CoffeeItem } from '../styles/CoffeePageStyles';

const CoffeePage = () => {
  return (
    <CoffeePageWrapper>
      <Title>Coffee Menu</Title>
      <CoffeeList>
        <CoffeeItem><CoffeApi/></CoffeeItem>
      </CoffeeList>
    </CoffeePageWrapper>
  );
};

export default CoffeePage;
