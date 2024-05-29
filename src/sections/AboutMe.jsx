import React from 'react'
import Card from '../components/Card'

const AboutMe = () => {


    const aboutMeCardOne = (
        <>
            <h1>Currently studying at <span className="highlight">NAISD</span></h1>
        </>
    );

    const aboutMeCardTwo = (
        <>
            <h1>Created Python Guides on <span className="highlight" onClick={() => {window.open("https://github.com/Arce-Mdina/Python-Guide")}} style={{ cursor: "pointer" }}>GitHub</span></h1>
        </>
    );

    const aboutMeCardThree = (
        <>
            <h1>Has <span className="highlight">3</span> projects</h1>
        </>
    );

    const aboutMeCardFour = (
        <>
            <h1>Has <span className="highlight">2</span> websites</h1>
        </>
    );

    const aboutMeCardFive = (
        <>
            <h1>React | JavaScript | HTML | CSS</h1>
        </>
    );

  return (
    <>
        <div className="card-grid">
            <Card content={aboutMeCardOne}/>
            <Card content={aboutMeCardTwo}/>
            <Card content={aboutMeCardThree}/>
            <Card content={aboutMeCardFour}/>
            <Card content={aboutMeCardFive}/>
        </div>
    </>
  )
}

export default AboutMe