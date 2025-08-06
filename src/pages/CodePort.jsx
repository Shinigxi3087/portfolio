import NavBar from "../components/MainNav"
import Experience from "../sections/Experience"
import FeatureCards from "../sections/FeatureCards"
import Hero from "../sections/Hero"
import LogoSection from "../sections/LogoSection"
import Showcase from "../sections/Showcase"
import TechStack from "../sections/TechStack"



const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <TechStack/>
      <Showcase/>
      <LogoSection/>
      <FeatureCards/>
      <Experience/>
      <Footer/>
    </>
  )
}

export default App