import './App.css'
import Education from './components/Education'
import Buttons from './components/Buttons'

function App() {
  
  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Welcome to my <span className="header-2">Portfolio</span></h1>
          <br></br>
          <h2><span className="header-1">Hi!</span> I am William, a <span style={{ color: "#0a7ea4ff" }}>React JS</span> developer based in <span className="header-3">Europe</span></h2>
          
          
        </div>
      </div>

      <br></br>

      <div className="content">

        <Education />
      </div>
    </>
  )
}

export default App
