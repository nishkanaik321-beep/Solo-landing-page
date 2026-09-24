import { Routes, Route } from 'react-router-dom'
import Header from './components/HomePage/Header/Header.jsx'
import Hero from './components/HomePage/Hero/Hero.jsx'
import TrustStrip from './components/HomePage/TrustStrip/TrustStrip.jsx'
import WhatIsSolo from './components/HomePage/WhatIsSolo/WhatIsSolo.jsx'
import Journey from './components/HomePage/Journey/Journey.jsx'
import DiscoverPath from './components/HomePage/DiscoverPath/DiscoverPath.jsx'
import CourseSection from './components/HomePage/CourseSection/CourseSection.jsx'
import ProjectSpotlight from './components/HomePage/ProjectSpotlight/ProjectSpotlight.jsx'
import Showcase from './components/HomePage/Showcase/Showcase.jsx'
import FinalCTA from './components/HomePage/FinalCTA/FinalCTA.jsx'
import Footer from './components/HomePage/Footer/Footer.jsx'
import Sign from './components/SignPage/Sign.jsx'
import HeroD from './components/DiscoverPage/HeroD/HeroD.jsx'
import SkillsD from './components/DiscoverPage/SkillsD/SkillsD.jsx'
import CareerD from './components/DiscoverPage/CareerD/CareerD.jsx'
import OfferingsD from './components/DiscoverPage/OfferingsD/OfferingsD.jsx'
import HeroB from './components/BuildPage/HeroB/HeroB.jsx'
import AboutB from './components/BuildPage/AboutB/AboutB.jsx'
import LiveProjectsB from './components/BuildPage/LiveProjectsB/LiveProjectsB.jsx'
import ReviewB from './components/BuildPage/ReviewB/ReviewB.jsx'
import HeroS from './components/ShowcasePage/HeroS/HeroS.jsx'
import SourcesS from './components/ShowcasePage/SourcesS/SourcesS.jsx'
import ProcessS from './components/ShowcasePage/ProcessS/ProcessS.jsx'
import WalletS from './components/ShowcasePage/WalletS/WalletS.jsx'
import UsefulnessS from './components/ShowcasePage/UsefulnessS/UsefulnessS.jsx'
import OpportunitySectionD from './components/DiscoverPage/OpportunitySection/OpportunitySection.jsx'
import Profile from './components/HomePage/Profile/Profile.jsx'

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhatIsSolo />
        <Journey />
        <Profile />
        <DiscoverPath />
        <CourseSection />
        <ProjectSpotlight />
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
        <OfferingsD />
        <SkillsD />
        <CareerD />
        <OpportunitySectionD />
      </main>
      <FinalCTA />
      <Footer />
    </>
  )
}

function BuildPage() {
  return (
    <>
      <Header />
      <main>
        <HeroB />
        <AboutB />
        <LiveProjectsB />
        <ReviewB /> 
      </main>
      <FinalCTA />
      <Footer />
    </>
  )
}

function ShowcasePage() {
  return (
    <>
      <Header />
      <main>
        <HeroS />
        <SourcesS />
        <ProcessS />
        <WalletS />
        <UsefulnessS />
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
      <Route path="/build" element={<BuildPage />} />
      <Route path="/showcase" element={<ShowcasePage />} />
    </Routes>
  )
}