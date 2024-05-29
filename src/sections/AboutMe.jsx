import React from 'react'
import Card from '../components/Card'

const AboutMe = () => {

    const aboutMeCardOne = (
        <>
            <h1>Winner of </h1>
        </>
    );

    const aboutMeCardTwo = (
        <>
            <h1>Created a Python Learning Base on GitHub</h1>
        </>
    );

  return (
    <>
        <div className="card-grid">
            <Card content={aboutMeCardOne}/>
            <Card content={aboutMeCardTwo}/>
        </div>
    </>
  )
}

export default AboutMe