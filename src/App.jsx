import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './landing/landing'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App
