import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <main className="min-h-[100vh] bg-white dark:bg-base-200">
        
        {/* <Sidebar /> */}

        {children}
      </main>
    </>
  )
}

export default Layout
