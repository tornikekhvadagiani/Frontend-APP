import { useEffect, useState } from 'react';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

function Api() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/users`, { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      }
     }).then(res =>{
      if (!res.ok) throw new Error("Response failed");
      return res.json();})
      .then(data => setUserList(data.items.map(user =>{
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          id: user._uuid,
        }

      })))
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, [])
  
  const getUsers= ()=>{
    fetch(`${API_URL}/users`, { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      }
     }).then(res =>{
      if (!res.ok) throw new Error("Response failed");
      return res.json();})
      .then(data => setUserList(data.items.map(user =>{
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          id: user._uuid,
        }

      })))
      .catch((err) => console.error("Error:", err))
    }


  return (
    <div className="App">
      
      
      <button onClick={getUsers}>GET Users</button>
      <button onClick={() => setUserList([])}>Clear Users</button>
      {loading && <p>Loading...</p>}
      {!loading && userList.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
        </div>
      ))}
    </div>
  );
}

export default Api