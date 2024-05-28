import React from 'react'
import Card from '../components/Card'

const AboutMe = () => {

    const aboutMeCardOne = (
        <>
            <h1>Winner of </h1>
        </>
    );

  return (
    <>
        <div className="card-grid">
            <Card content={aboutMeCardOne}/>
            <Card content={aboutMeCardOne}/>
        </div>
    </>
  )
}

export default AboutMe