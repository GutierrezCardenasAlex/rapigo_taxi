import About from './components/About'
import AppsSection from './components/AppsSection'
import CTA from './components/CTA'
import DownloadSection from './components/DownloadSection'
import DriversSection from './components/DriversSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PartnersSection from './components/PartnersSection'
import PassengersSection from './components/PassengersSection'
import SecuritySection from './components/SecuritySection'
import TaxiSeguro from './components/TaxiSeguro'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <AppsSection />
        <DownloadSection />
        <TaxiSeguro />
        <PartnersSection />
        <PassengersSection />
        <DriversSection />
        <SecuritySection />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
