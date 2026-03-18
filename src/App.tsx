import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AssetsPage } from './pages/AssetsPage'
import { DashboardPage } from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/assets" element={<AssetsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
