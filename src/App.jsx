import './App.css'
import Education from './sections/Education'
import AboutMe from './sections/AboutMe'
import Padding from './components/Padding'

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

        {/* About Me */}
        <AboutMe />

        <Padding padding="35px"/>

        {/* Education */}
        <Education />
      </div>
    </>
  )
}

export default App
