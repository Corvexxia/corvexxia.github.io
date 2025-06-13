import { HashRouter , Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import { ProjectsPage } from './pages/Projects';
import { HomePage } from './pages/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ArtPage } from './pages/ArtPage';
import { SoloProjects } from './pages/SoloProjects';

function App() {

  return (
    <>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team-projects" element={<ProjectsPage />} />
        <Route path="/solo-projects" element={<SoloProjects />} />
        <Route path="/art" element={<ArtPage />} />
      </Routes>
    </HashRouter>
      
    </>
  )
}

export default App
