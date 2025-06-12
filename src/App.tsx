import { HashRouter , Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import { ProjectsPage } from './pages/Projects';
import { HomePage } from './pages/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ArtPage } from './pages/ArtPage';

function App() {

  return (
    <>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/art" element={<ArtPage />} />
      </Routes>
    </HashRouter>
      
    </>
  )
}

export default App
