import ReactDOM from "react-dom/client";
import appRoutes from "./routes";
import { RouterProvider } from "react-router-dom";

// creating root
const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRoutes} />);
