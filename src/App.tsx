import './App.css'
import Routes from './routes/routes.tsx';
import {StrictMode} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./api/QueryClient.ts";

function App() {

  return (
      <StrictMode>
          <QueryClientProvider client={queryClient}>
              <Routes />
          </QueryClientProvider>
      </StrictMode>
  )
}

export default App
