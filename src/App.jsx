import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Suspense, lazy } from 'react'
import Landing from '../pages/Landing'
import { RecoilRoot } from 'recoil'

const Ccycle = lazy(() => import('../pages/FirstSem'))
const Pcycle = lazy(() => import('../pages/pcycle'))

function App() {
  return(
    <div>
      
      <RecoilRoot>
      <BrowserRouter>
        
        <Routes>
          <Route path="/c-cycle" element = {
            <Suspense fallback={"loading..."}>
              <Ccycle></Ccycle>
            </Suspense>
          }/>

          <Route path="/p-cycle" element = {
            <Suspense fallback={"loading..."}>
              <Pcycle></Pcycle>
            </Suspense>
          }/>

          <Route path='/' element = {
            <Suspense fallback={"wait..."}>
              <Landing></Landing>
            </Suspense>
          }/>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}


export default App
