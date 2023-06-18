import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Context/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
