import AppProvider from '@/components/Provider/AppProvider';
import React from 'react'
interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout = ({children}:RootLayoutProps) => {
  return (
    <div>
      <AppProvider>

      {children}
      </AppProvider>
    </div>
  )
}

export default RootLayout
