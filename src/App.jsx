import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Footer from './sections/Footer'
import Contact from "./sections/Contact"


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <TechStack/>
      <Showcase/>
      <FeatureCards/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App



