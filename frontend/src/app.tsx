import { CreateTrip } from "./pages/create-trip"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTrip />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
