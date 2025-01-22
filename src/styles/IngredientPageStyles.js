import styled from 'styled-components';

export const IngredientPageWrapper = styled.div`
  padding: 2rem;
  background-color: #fff3e6;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #d9534f;
  text-align: center;
`;

export const IngredientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

export const IngredientItem = styled.div`
  background-color: white;
  padding: 1rem;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 180px;
  text-align: center;
`;
