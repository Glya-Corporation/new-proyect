import './App.css'
import Header from './componets/Header'
import Register from './componets/Register'
import Customers from './componets/Customers'
import Reports from './componets/Reports'
import Closed from './componets/Closed'
import DeletedCustomers from './componets/DeletedCustomers'
import Settings from './componets/Settings'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './componets/ProtectedRoutes'
import Login from './componets/Login'


function App() {
  let clientes = JSON.parse(window.localStorage.getItem('clientesGuardados'))
  let savedPercentage = JSON.parse(window.localStorage.getItem('porcentaje'))
  let registro = JSON.parse(window.localStorage.getItem('registro'))
  let color = window.localStorage.getItem('color')
  let font = window.localStorage.getItem('font')

  document.body.classList.add(color)

  return (
    <HashRouter>
      <div className={font}>
        <Header />
        <Routes>
          <Route path="/login" element={<Login color={color}/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Register clientes={clientes} savedPercentage={savedPercentage} />} />
            <Route path="/customers" element={<Customers clientes={clientes} />} />
            <Route path="/reports" element={<Reports clientes={clientes} porcentaje={savedPercentage} />} />
            <Route path="/closed" element={<Closed clientes={clientes} registro={registro} porcentaje={savedPercentage} />} />
            <Route path="/deleted-customers" element={<DeletedCustomers />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
