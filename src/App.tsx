import './App.css';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { AssetsPage } from "./pages/Assets";
import { EditAssetPage } from "./pages/Assets/EditAssetPage";
import { NewAssetPage } from "./pages/Assets/NewAssetPage";
import { DashboardPage } from "./pages/Dashboard";

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