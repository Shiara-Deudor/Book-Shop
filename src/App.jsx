import { useState } from 'react'
import '@/styles/index.scss'
import Header from './layouts/header/header'
import Home from './pages/home/home'
import Footer from './layouts/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
