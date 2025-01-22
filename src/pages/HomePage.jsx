
import Api from '../services/api';
import { HomePageWrapper, Heading, Paragraph } from '../styles/HomePageStyles';

const HomePage = () => {
  return (
    <HomePageWrapper>
        <Api/>
      <Heading>Welcome to the Craft Coffee Shop</Heading>
      <Paragraph>
        Browse through our coffee menu and ingredients to create your perfect cup of coffee!
      </Paragraph>
    </HomePageWrapper>
  );
};

export default HomePage;
