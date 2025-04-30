import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Filter from '../pages/Filter/Filter'
import Record from '../pages/Record/Record'
import Prescription from '../pages/Prescription/Prescription'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="/filtro" element={<Filter/>}/>
        <Route path="/registro" element={<Record/>}/>
        <Route path="/prescricao" element={<Prescription/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
