import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'  // 👈 ADICIONE ESTA LINHA
import Contact from './components/Contact'
import Footer from './components/Footer'
import PricingFAQ from './components/PricingFAQ'
import GitHubStats from './components/GitHubStats'


function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />   
      <PricingFAQ />      {/* 👈 ADICIONE ESTA LINHA */}
      <Contact />
      <GitHubStats />  {/* 👈 ADICIONE AQUI */}
      <Footer />
    </div>
  )
}

export default App
