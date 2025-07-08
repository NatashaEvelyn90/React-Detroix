import TopBar from './components/TopBar'
import Header from './components/Header'
import Main from './components/Main'
import Circles from './components/Circles'
import styleSheet from './style.module.css'


function App() {
  
  return (
    <div className= "container">
    <TopBar />
    <Header />
    <Main />
    <Circles />
    </div>
  )
}

export default App
