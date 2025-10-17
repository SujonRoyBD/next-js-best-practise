import AppProvider from '@/components/Provider/AppProvider';
import { Toaster } from '@/components/ui/sonner';
import React from 'react'
interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout = ({children}:RootLayoutProps) => {
  return (
    <div>
      <AppProvider>

      {children}
       <Toaster position="top-right" richColors />
      </AppProvider>
    </div>
  )
}

export default RootLayout
