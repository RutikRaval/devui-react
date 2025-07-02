import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <div>
            <SideBar />
            <div>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default MainLayout