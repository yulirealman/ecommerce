
import './App.css'
import { Routes, Route } from 'react-router'
import {HomePage} from './pages/HomePage'
import {CheckOutPage} from './pages/CheckOutPage'
import {OrdersPage} from './pages/OrdersPage'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>

    </>
  )
}

export default App
