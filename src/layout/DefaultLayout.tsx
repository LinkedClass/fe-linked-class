import React, { Suspense, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from './Content'
import { useNavigate, Route, Routes } from 'react-router-dom';
import routes from '../routes'

type DefaultLayoutProps = {
  isCanAccess: boolean
}

function DefaultLayout({ isCanAccess }: DefaultLayoutProps) {
  const navigate = useNavigate()

  useEffect(() => {
    if(!isCanAccess) navigate('/unauthorized')
  }, [isCanAccess, navigate])

  return (
    <div className='default-layout'>
      <Navbar />
      <Header />
      <Suspense fallback={<div>Loading . . .</div>}>
        <Routes>
          {routes.map((route) => (
            <>
            {console.log(route)}
            <Route 
              path={route.path}
              element={<Content element={route.element} title={route.title} />}
            />
            </>
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default DefaultLayout