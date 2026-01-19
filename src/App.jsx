
import './App.css'
import { Routes, Route } from 'react-router'
import {HomePage} from './pages/HomePage'
import {CheckOutPage} from './pages/CheckOutPage'
function App() {


  return (
    <>
      <Routes>
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/checkout.html" element={<CheckOutPage />} />
      </Routes>

    </>
  )
}

export default App
