import './App.css';

import { AppLayout } from '@layouts';
import { AssetsPage, DashboardPage, EditAssetPage, NewAssetPage } from '@pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/assets", element: <AssetsPage /> },
      { path: "/assets/new", element: <NewAssetPage /> },
      { path: "/assets/:id", element: <EditAssetPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
