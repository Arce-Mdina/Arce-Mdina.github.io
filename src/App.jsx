import './App.css'
import Education from './sections/Education'
import AboutMe from './sections/AboutMe'
import Padding from './components/Padding'

import Projects from './sections/Projects'

function App() {
  
  return (
    <>
      <div className="header">
        <div className="welcome-message">
          <h1>Hi! I am William! I am also known as Arce-Mdina online!</h1>
        </div>
        <div className="title">
          <h1>Welcome to my <span className="header-2">Portfolio</span></h1>
          <br></br>
          <h2 className="hello-message"><span className="header-1">Hi!</span> I am William, a <span style={{ color: "#0a7ea4ff" }}>React JS</span> developer based in <span className="header-3">Europe</span></h2>
          
          
        </div>
      </div>

      <br></br>

      <div className="content">

        {/* About Me */}
        <AboutMe />

        <Padding padding="35px"/>

        {/* Education */}
        <Education />

        <Padding padding="35px"/>

        {/* Projects */}
        <Projects />



        <Padding padding="50px"/>
      </div>
    </>
  )
}

export default App
