import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function Home() {
  return <h1>Home</h1>
}

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
