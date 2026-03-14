import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// ReactRouter
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-7xl">
        Hello World <button className="btn btn-outline">Button</button>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
