import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./components/App";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard"
import Nutrition from "./components/Nutrition/Nutrition";
import Exercise from "./components/Exercise/Exercise";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'auth', element: <Auth /> },
      { path: 'profile', element: <Profile /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'nutrition', element: <Nutrition /> },
      { path: 'exercise', element: <Exercise /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
