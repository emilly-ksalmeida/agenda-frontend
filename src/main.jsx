import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppProvider from "./components/AppProvider.jsx";
import App from "./App.jsx";
import ContactDetails from "./pages/ContactDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/contact-details",
    element: <ContactDetails />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
);