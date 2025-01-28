
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CoffeePage from './pages/CoffeePage';
import IngredientPage from './pages/IngredientPage';
import NotFoundPage from './pages/NotFoundPage';
import { Navbar, NavLinks, NavLink } from './styles/HeaderStyles';


function App() {
  return (
    <Router>
      <Navbar>
        <NavLinks>
          <NavLink><Link to="/">Coffee</Link></NavLink>
          <NavLink><Link to="/ingredients">Ingredients</Link></NavLink>
        </NavLinks>
      </Navbar>
      <Routes>
        <Route path="/" element={<CoffeePage /> } />
        <Route path="/ingredients" element={<IngredientPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
