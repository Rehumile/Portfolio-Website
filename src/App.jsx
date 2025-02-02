import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Qualifications from './components/Qualifications/Qualifications'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Work from './components/Work/Work'

function App() {

  let cashCentres = {
    "cashCentre": [
      {
        "id": "",
        "name": "All"
      },
      {
        "id": "",
        "name": "Multiple"
      },
      {
        "id": 1,
        "name": "Durban",
        "regionId": 3
      },
      {
        "id": 2,
        "name": "Louis Trichardt",
        "regionId": 6
      },
      {
        "id": 3,
        "name": "Bloemfontein",
        "regionId": 5
      }
    ]
  }
  function sortByCashCentreName(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}

// Sort the "cashCentre" array within the modifiedData object
cashCentres.cashCentre.sort(sortByCashCentreName);

console.log('sorted',cashCentres);
  //console.log(cashCentres.cashCentre.sort())
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About />
        <Skills/>
        <Qualifications/>
        <Work/>
        <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App
