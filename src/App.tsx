import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout'
import routes from './routes';
import './styles/style.scss'

const NotFound = React.lazy(() => import('./pages/NotFound'))
const Unauthorized = React.lazy(() => import('./pages/Unauthorized'))
const isLogin = true
const isAuth = true
const isCanAccess = true

function renderAuth () {
  if(isLogin) {
    return <DefaultLayout isCanAccess={isCanAccess} />
  }
}

function App() {

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        <Route
          path="/notfound"
          element={<NotFound />}
        />
        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />
        <Route
          path="*"
          element={renderAuth()}
        />
        {/* <Route path='/' element={<Home />}/> */}
      </Routes>
    </Suspense>
  );
}

export default App;
