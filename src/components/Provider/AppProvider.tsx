"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // ✅ Initialize a query client
  const queryClient = new QueryClient();

  return (
    // ✅ Wrap your entire app with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default AppProvider;
