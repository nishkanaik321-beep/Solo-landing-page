import { Routes, Route } from 'react-router-dom'
import Header from './components/HomePage/Header/Header.jsx'
import Hero from './components/HomePage/Hero/Hero.jsx'
import TrustStrip from './components/HomePage/TrustStrip/TrustStrip.jsx'
import WhatIsSolo from './components/HomePage/WhatIsSolo/WhatIsSolo.jsx'
import Journey from './components/HomePage/Journey/Journey.jsx'
import DiscoverPath from './components/HomePage/DiscoverPath/DiscoverPath.jsx'
import CourseSection from './components/HomePage/CourseSection/CourseSection.jsx'
import ProjectSpotlight from './components/HomePage/ProjectSpotlight/ProjectSpotlight.jsx'
import OpportunitySection from './components/HomePage/OpportunitySection/OpportunitySection.jsx'
import Showcase from './components/HomePage/Showcase/Showcase.jsx'
import FinalCTA from './components/HomePage/FinalCTA/FinalCTA.jsx'
import Footer from './components/HomePage/Footer/Footer.jsx'
import Sign from './components/SignPage/Sign.jsx'
import HeroD from './components/DiscoverPage/HeroD/HeroD.jsx'
import SkillsD from './components/DiscoverPage/SkillsD/SkillsD.jsx'
import CareerD from './components/DiscoverPage/CareerD/CareerD.jsx'
import RolesD from './components/DiscoverPage/RolesD/RolesD.jsx'

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhatIsSolo />
        <Journey />
        <DiscoverPath />
        <CourseSection />
        <ProjectSpotlight />
        <OpportunitySection />
        <Showcase />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

function DiscoverPage() {
  return (
    <>
      <Header />
      <main>
        <HeroD />
        <SkillsD />
        <RolesD />
        <CareerD />
      </main>
      <FinalCTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Sign />} />
      <Route path="/discover" element={<DiscoverPage />} />
    </Routes>
  )
}
