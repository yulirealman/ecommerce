
import './App.css'
import { Routes, Route } from 'react-router'
import {HomePage} from './pages/HomePage'
import {CheckOutPage} from './pages/CheckOutPage'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>

    </>
  )
}

export default App
