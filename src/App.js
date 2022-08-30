import './App.css';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Header from './components/Header';
import { useState } from 'react';
import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation();
  const [pizza, setPizza] = useState({
    base:"",
    Toppings:[]
  })

  const [data, setData] = useState([])

  const addBase = (base) => {
    setPizza({...pizza, base: base})
  }

  const addToppings = (topping, spanClass) => {
    let newToppings;
    if(!pizza.Toppings.includes(topping)){
      newToppings = [...pizza.Toppings, topping]
    } else {
      newToppings = pizza.Toppings.filter((item) => item !== topping)
    }
    setPizza({...pizza, Toppings: newToppings})
    spanClass = 'no'
  }

  const addPizza = (pizza, spanClass) => {
    setData([...data, pizza])
    spanClass = 'no'
  }


  return (
    <div className="App">
    <Header />
    <div className="container">
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key} >
        <Route exact path='/' element={<Home />} />
        <Route path='/base' element={<Base pizza = {pizza} addBase = {addBase}/>} />
        <Route path='/toppings' element={<Toppings pizza = {pizza} addToppings={addToppings} addPizza={addPizza}/>} />
        <Route path='/order' element={<Order pizza={pizza} data={data}/>} />
      </Routes>
      </AnimatePresence>
    </div>
    </div>
    
  );
}

export default App;
