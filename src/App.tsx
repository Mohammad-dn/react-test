import { RouterProvider } from "react-router-dom";
import "@/App.css";
import "@/index.css";
import { routes } from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { MapProvider } from "./context";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MapProvider>
        <Toaster />
        <RouterProvider router={routes} />
      </MapProvider>
    </QueryClientProvider>
  );
}

export default App;
