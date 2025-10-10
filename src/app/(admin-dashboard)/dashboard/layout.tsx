import React from 'react'
interface RootLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({children}:RootLayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default DashboardLayout
