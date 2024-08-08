
import './App.css'
import AboutSection from './Components/AboutSection'
import Footer from './Components/Footer'
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
    <Footer/>
    </div>
  )
}

export default App
