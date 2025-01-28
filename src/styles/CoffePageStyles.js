import styled from "styled-components";
import coffeeImage from "../image/coffe.jpg";

export const CoffeePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  color: #333;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 2rem; /* 5rem-ს მცირე */
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
   /* Responsivობა */
  @media () {
  }

  @media (max-width: 360px) {
    font-size: 1.2rem
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  margin: 0 auto;
  margin-top: 8.5rem;
  max-width: 600px;
  padding: 0 1rem;
  font-family: "Arial", sans-serif;
`;

export const CoffeeImageBackground = styled.div`
  width: 100%;
  height: 80%;
  background-image: url(${coffeeImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;

  /* Responsivობა */
  @media (max-width: 768px) {
    height: 50%;
  }

  @media (max-width: 360px) {
    height: 40%;
  }
`;

export const TitleTopProducts = styled.h1`
  color: black;
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

//TopCoffeproducts

export const CoffeeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
`;

export const CoffeeCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CoffeeImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CoffeeDetails = styled.div`
  padding: 1rem;
`;

export const CoffeeName = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0.5rem 0;
`;

export const CoffeePrice = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0;
`;

export const BuyButton = styled.button`
  background-color: #ffa726;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 60px;
  padding: 10px 0px;
  &:hover {
    background-color: #fb8c00;
  }
`;

//footer

export const Footer = styled.footer`
  background-color: #2c2c2c;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  width: 100%;
`;

export const FooterDescription = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.5;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const FooterInfo = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #aaa;
`;

export const FooterLink = styled.a`
  color: #ff7e5f;
  text-decoration: none;

  &:hover {
    color: #feb47b;
  }
`;
