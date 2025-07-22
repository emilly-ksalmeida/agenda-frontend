import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppProvider from "./components/AppProvider.jsx";
import App from "./App.jsx";
import ContactDetails from "./pages/ContactDetails.jsx";
import ContactUpdate from "./pages/ContactUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contact-details",
    element: <ContactDetails />
  },
  {
    path: "/update",
    element: <ContactUpdate />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
);