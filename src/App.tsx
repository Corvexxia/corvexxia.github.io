import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import { ProjectsPage } from './pages/Projects';
import { HomePage } from './pages/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="./home" element={<HomePage />} />
        <Route path="./projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
