import './App.css';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { AssetsPage, DashboardPage, EditAssetPage, NewAssetPage } from './pages';

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