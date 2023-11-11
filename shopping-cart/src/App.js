import './App.css';
import {BrowserRouter as Router, RouteProps, Route, Routes} from "react-router-dom" ;
import  Navbar  from './components/navbar'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context';



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/cart" element={<Shop />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

// Link is fro