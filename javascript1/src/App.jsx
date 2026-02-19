import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Registration from './components/Registration.jsx';

function App() {
  const x = [2024, 2005, 2006];
  const c = { name: "KIET", location: "Ghaziabad", estdyear: 1998 };

  return (
    <div>
      <Header title="My First React App" />
      <Header title="Lets Explore FSD Together" />
      
      <Registration />        
      <h1>Hello</h1>

      <div className="card">
        <h4>THIS IS MT FIRST CARD</h4>
        <p>THIS DEMO IS FOR LEARNING PURPOSE ONLY </p>
      </div>

      <Footer year={x} company={c} />
    </div>
  )
}

export default App
