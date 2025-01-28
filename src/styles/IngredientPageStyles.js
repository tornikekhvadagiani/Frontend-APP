import styled from "styled-components";
export const IngredientTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center; 
  margin: 16px 0;
  padding: 8px;
  background-color: #f5f5f5; 
  border-radius: 8px; 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 360px) {
    font-size: 1.3rem;
    margin: 12px 0;
  }
`;

export const IngredientCard = styled.div`
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  padding: 12px;
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: calc(50% - 16px);
  }

  @media (max-width: 360px) {
    width: 100%; 
    margin-bottom: 8px;
  }
`;

export const IngredientDetail = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
`;

export const IngredientPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #3a9d23;
  margin-top: 8px;

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

export const IngredientContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 16px; 
  justify-content: flex-start; 
  padding: 0 12px; 
  box-sizing: border-box;
  justify-content: space-between;

  @media (max-width: 360px) {
    padding: 0 8px; 
  }
`;
