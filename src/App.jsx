import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
const Home = lazy(() => import('./pages/home'))
const NotFound = lazy(() => import('./pages/notFound'))
const Register = lazy(()=> import('./pages/register'))
const Number  = lazy(()=> import('./pages/number'))
const OtpPage  = lazy(()=> import('./pages/otpPage'))
const Anketa = lazy(()=> import('./pages/anketa'))


const Loader = () => (
<div className="loading flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9 h-screen justify-center items-center">
  <div className="tope flex flex-row items-center">
    <img src="/logo.png" alt="logo" className='w-[113px] sm:text-[143px] md:w-[173px] lg:w-[213px] xl:w-[253px] 2xl:w-auto' />
    <h2 className='text-[35px] font-promonument sm:text-[47px] md:text-[57px] lg:text-[67px] xl:text-[97px] 2xl:text-[117px] font-normal customText'>NIKAH.SPACE</h2>
  </div>
  <p className='text-[#6A59A7] font-promonument text-[20px] text-center sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[55px] font-normal'>САЙТ ЗНАКОМСТВ ДЛЯ МУСУЛЬМАН</p>
</div>
);


function App() {
 

  return (
    <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/number" element={<Number />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/anketa" element={<Anketa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
  )
}

export default App
