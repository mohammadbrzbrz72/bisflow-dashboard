import { RouterProvider } from "react-router-dom";

import router from "./routes";

export default function Provider() {
  return <RouterProvider router={router} />;
}
