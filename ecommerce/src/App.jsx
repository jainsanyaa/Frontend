import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const product = [
    {
      id: 1,
      name: "phone",
      price: 10000,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVHKh04Muw3ZBjokE24dFfv1VvF3SFAkW6Dq_85vAsKcnF-NC_c74vN7CNBGRvT_soFZe6YZJrZjJEMXdM0AMWBik6o1S7ROh1v58q-ybrZPO8ZsFt7lxrJVg"
    },
    {
      id: 2,
      name: "laptop",
      price: 20000,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTlueYTHc15CsHXc0IE4D1f3m1LiCsdhMWYwlS6gHV1eU721OzdkoSqhEOs0lsjdox27VZWvEshqGJyH1eXS58JWezeD6Md5qn0OeYboto12O4h7bHGXPh8sg"
    }
  ];
  function addToCart(product) {
    setCart([...cart, product]);
  }
  function removeFromCart(index) {
    const updatedCart = cart.filter((_, i)=>i!= index);
    setCart(updatedCart);
  }
  const totalAmount = cart.reduce((total, item) => total + index.price, 0);
  return (
      <div>
        <Header  cartCount = {cart.length} />
        <product />
        <Cart />        
      </div>
        
  )
}

export default App
