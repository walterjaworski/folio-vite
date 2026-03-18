import './App.css'
import { AssetsList } from './features/assets/components'

function App() {

  return (
    <div className="min-h-screen bg-neutral-light p-8">
      <h1 className="text-3xl font-bold text-brand-primary">
        Folio 💰
      </h1>

      <AssetsList />
    </div>
  )
}

export default App
