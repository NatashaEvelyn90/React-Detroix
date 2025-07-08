import logo from './components/logo.png'

function App() {
  

  return (
   <section>
    <div className="container">
    <Header />
    </div>
   </section>
  )
}

function Header() {
  
  return (
    <div className="row">
      <img src={logo} alt="" />
    </div>
  )
}

export default App
