import { useRoutes } from "react-router-dom";
import routes from "tempo-routes";

export default function TempoRoutes() {
  // Only attempt to use routes if they exist
  if (!routes) return null;

  return useRoutes(routes);
}
