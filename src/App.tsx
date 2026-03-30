import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AssetsPage } from './pages/Assets'
import { EditAssetPage } from './pages/Assets/EditAssetPage'
import { NewAssetPage } from './pages/Assets/NewAssetPage'
import { DashboardPage } from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/assets/new" element={<NewAssetPage />} />
        <Route path="/assets/:id" element={<EditAssetPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
