
import './App.css'
import AboutSection from './Components/AboutSection'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import RoadMapSection from './Components/RoadMapSection'
import Tokenomics from './Components/TokenomicSection'

function App() {

  return (
    <div className='app_container'>
    <NavBar/>
    <HeroSection/>
    <AboutSection/>
    <Tokenomics/>
    <RoadMapSection/>
    </div>
  )
}

export default App
