import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AssetsPage } from './pages/Assets'
import { NewAssetPage } from './pages/Assets/NewAssetPage'
import { DashboardPage } from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/assets/new" element={<NewAssetPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
