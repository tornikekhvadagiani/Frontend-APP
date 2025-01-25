import { HomePageWrapper, Heading, Paragraph, HomeImageBackground,  TitleTopProducts, CoffeeContainer,
   CoffeeCard, CoffeeImage, CoffeeDetails, CoffeeName, CoffeePrice, BuyButton, 
   Footer,
   FooterDescription,
   SocialIcons,
   FooterInfo,
   FooterLink} from '../styles/HomePageStyles';

   


const coffees = [
  { id: 1, name: 'Espresso', price: '5.00₾', image: '/images/espresso.jpg' },
  { id: 2, name: 'Cappuccino', price: '6.50₾', image: '/images/cappuccino.jpg' },
  { id: 3, name: 'Latte', price: '7.00₾', image: '/images/latte.jpg' },
  { id: 4, name: 'Americano', price: '4.50₾', image: '/images/americano.jpg' },
  { id: 5, name: 'Mocha', price: '8.00₾', image: '/images/mocha.jpg' },
  { id: 6, name: 'Flat White', price: '6.00₾', image: '/images/flatwhite.jpg' },
];

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomeImageBackground>
      <Heading>Welcome to the Craft Coffee Shop</Heading>
      <Paragraph>
        Browse through our coffee menu and ingredients to create your perfect cup of coffee!
      </Paragraph>
      </HomeImageBackground>
      <TitleTopProducts>Top Products</TitleTopProducts>
      <CoffeeContainer>
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id}>
                <CoffeeImage src={coffee.image} alt={coffee.name} />
                <CoffeeDetails>
                  <CoffeeName>{coffee.name}</CoffeeName>
                  <CoffeePrice>{coffee.price}</CoffeePrice>
                  <BuyButton>Buy</BuyButton>
                </CoffeeDetails>
              </CoffeeCard>
            ))}
          </CoffeeContainer>
          <Footer>
  <FooterDescription>
    Craft Coffee Shop - Bringing you the finest coffee blends and ingredients for your perfect cup.
  </FooterDescription>
  <SocialIcons>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons/facebook.svg" alt="Facebook" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons/instagram.svg" alt="Instagram" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons/twitter.svg" alt="Twitter" />
    </a>
  </SocialIcons>
  <FooterInfo>
    Phone: <FooterLink href="tel:+1234567890">+123 456 7890</FooterLink> <br />
    Address: 123 Coffee Lane, Tbilisi, Georgia
  </FooterInfo>
</Footer>




    </HomePageWrapper>

  );
};

export default HomePage;
