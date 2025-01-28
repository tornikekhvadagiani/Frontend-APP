import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { IngredientCard,  IngredientDetail, IngredientPrice, IngredientContainer, IngredientTitle } from '../styles/IngredientPageStyles';

const API_URL = import.meta.env.VITE_API_URL;
const INGREDIENTS_API_KEY = import.meta.env.VITE_INGREDIENTS_API_KEY;

function IngredientPage() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/ingredients`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${INGREDIENTS_API_KEY}`,
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Response failed");
        return res.json();
      })
      .then(data => setUserList(data.items.map(user => ({
        uuid: user._uuid,
        name: user.ingredientName,
        country: user.ingredientCountry,
        cream: user.ingredientCream,
        description: user.ingredientDescription,
        flavor: user.ingredientFlavor,
        price: user.ingredientPrice,
        gelPrice: user.ingredientGelPrice,
        strength: user.ingredientStrength,
      }))))
      .catch(err => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    <IngredientTitle>Ingredients</IngredientTitle>
      {loading && <Loader />}
      {!loading && userList.length === 0 && <p>No ingredients found</p>}
      {!loading && (
        <IngredientContainer>
          {userList.map(user => (
            <IngredientCard key={user.uuid}>
              <IngredientDetail><strong>Country:</strong> {user.country}</IngredientDetail>
              <IngredientDetail><strong>Flavor:</strong> {user.flavor}</IngredientDetail>
              <IngredientDetail><strong>Strength:</strong> {user.strength}</IngredientDetail>
              <IngredientPrice>{user.gelPrice ? `${user.gelPrice} GEL` : `${user.price} USD`}</IngredientPrice>
            </IngredientCard>
          ))}
        </IngredientContainer>
      )}
    </>
  );
}

export default IngredientPage;
