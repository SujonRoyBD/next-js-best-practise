import React from 'react'
interface RootLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({children}:RootLayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthLayout
