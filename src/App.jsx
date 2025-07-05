import { useState } from 'react'
import { HashRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import { WatchListProvider } from './context/WatchListContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WatchListProvider>
      <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/watchlist' element={<WatchList/>}/>
      </Routes>
    </HashRouter>
    </WatchListProvider>
    
  )
}

export default App
