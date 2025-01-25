import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;



function CoffeApi() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);


  useEffect(() => {
    fetch(`${API_URL}/coffe`, { 
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
      coffeType: user.coffeType,
        id: user._uuid,
      })))
    )
    .catch((err) => console.error("Error:", err))
    .finally(() => setLoading(false));
  }, []);

 

  return (
    <div className="App">
      {loading ? <Loader /> : null}
      <div>
        {!loading && userList.length === 0 && <p>No users found</p>}
        {!loading && userList.map((user) => (
          <div key={user.id}>
            <h3>{user.coffeType}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeApi;


