import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductList from './components/productList'
import Cart from './components/cart'
import Search from './components/Search'
function App() {


  const [cart, setCart] = useState([]);
  const[totalAmt, setAmt] = useState(0);
  const product = [  
      {
      id: 1,
      name: "phone",
      price: 10000,
      image: "https://static.vecteezy.com/system/resources/previews/012/300/211/original/smart-phone-illustration-png.png"
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
    setAmt(totalAmt + product.price);
  }
  function removeFromCart(index) {
    const updatedCart = cart.filter((_, i)=>i!= index);
   setCart(updatedCart);

  }
 //const totalAmount = cart.reduce((total, item) => total + index.price, 0);
  return (
      <div>
        <Search/>
        <Header  cartCount = {cart.length} />
        <ProductList products={product} addToCart={addToCart} />
        <Cart totalAmt={totalAmt}></Cart>
      </div>
        
  )
}

export default App