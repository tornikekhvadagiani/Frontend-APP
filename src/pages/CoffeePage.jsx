import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { CoffeePageWrapper, Heading, Paragraph, CoffeeImageBackground,  TitleTopProducts, CoffeeContainer,
   CoffeeCard, CoffeeImage, CoffeeDetails, CoffeeName, CoffeePrice, BuyButton, 
   Footer,
   FooterDescription,
   SocialIcons,
   FooterInfo,
   FooterLink} from '../styles/CoffePageStyles';
import { useEffect, useState } from 'react';
import { typeImages } from '../services/typeImagesAPI';



const CoffeePage = () => {

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;
  const [userList, setUserList] = useState([]);
  
    useEffect(() => {
      fetchData()
    }, []);
const fetchData = () => { fetch(`${API_URL}/coffe`, { 
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`,
  }
})
.then(res => {
  if (!res.ok) throw new Error("Response failed");
  return res.json();
})
.then(data => setUserList(data.items.map(user => ({
  uuid: user._uuid,
  type: user.coffeType,
  country: user.coffeCountry,
  description: user.coffeDescription,
  flavor: user.coffeFlavor,
  price: user.coffePrice,
  gelPrice: user.coffeGelPrice,
  sugar: user.coffeSugar,
  coffeine: user.coffeine,
  coffeIngredients: user.addedIngredients, // [] დამეპე

  })))
)
.catch((err) => console.error("Error:", err))}


const filterImage = (title) => {

  
  const filtered = typeImages?.filter((e) =>  e.title === title)
  return filtered
}
const [selectedGelPrice,setSelectedGelPrice] = useState([])

const convertPrice = (id) => {
  if(selectedGelPrice.includes(id)){
    const filtered = selectedGelPrice.filter((e) => e !== id)
setSelectedGelPrice(filtered)
return
  }
setSelectedGelPrice([...selectedGelPrice,id])



}

  return (
    <CoffeePageWrapper>
      <CoffeeImageBackground>
      <Heading>Welcome to the Craft Coffee Shop</Heading>
      <Paragraph>
        Browse through our coffee menu and ingredients to create your perfect cup of coffee!
      </Paragraph>
      </CoffeeImageBackground>
      <TitleTopProducts>Top Products</TitleTopProducts>
      <CoffeeContainer>
            {userList?.map((coffee) => (
              <CoffeeCard key={coffee.uuid}>
                <CoffeeImage src={filterImage(coffee.type)[0]?.img} alt={coffee.type} />
                <CoffeeDetails>
                  <CoffeeName>{coffee.type}</CoffeeName>
                  <CoffeePrice >{selectedGelPrice.includes(coffee.uuid) ? `${coffee.gelPrice}₾` : `${coffee.price}$`}</CoffeePrice>
                  <BuyButton >Buy</BuyButton>
                  <BuyButton onClick={() => convertPrice(coffee.uuid)}>{selectedGelPrice.includes(coffee.uuid) ? "DOLAR" : "GEL"}</BuyButton>
                </CoffeeDetails>
              </CoffeeCard>
            ))}
          </CoffeeContainer>
          <Footer>
  <FooterDescription>
    Craft Coffee Shop - Bringing you the finest coffee blends and ingredients for your perfect cup.
  </FooterDescription>
  <SocialIcons>
  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={32} color="#4267B2" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} color="#C13584" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={32} color="#1DA1F2" />
      </a>
    </div>
  </SocialIcons>
  <FooterInfo>
    Phone: <FooterLink href="tel:+1234567890">+123 456 7890</FooterLink> <br />
    Address: 123 Coffee Lane, Tbilisi, Georgia
  </FooterInfo>
</Footer>
    </CoffeePageWrapper>

  );
};

export default CoffeePage;
