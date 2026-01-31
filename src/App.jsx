import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ProductsList from './pages/ProductsList'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prodotti" element={<ProductsList />} />
        <Route path="/chisiamo" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App