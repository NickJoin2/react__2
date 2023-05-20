// import './styles/nav.scss'
// import './styles/header.scss'
// import './styles/select.scss'
// import './styles/hero.scss'
// import './styles/comand.scss'
// import './styles/Package.scss'
// import './styles/footer.scss'
import './styles/all.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Select from './components/Select'
import Hero from './components/Hero'
import Package from './components/Package'
import Team from './components/Team'
import Footer from './components/Footer'





function App() {
  return (
    <div className='body'>
      <Nav/>
      <Header/>
      <Select/>
      <Hero/>
      <Package/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default App
