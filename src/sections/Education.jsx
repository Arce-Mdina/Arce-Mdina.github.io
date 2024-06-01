import React, { useState } from 'react'
import Padding from '../components/Padding'
import DCISVid from '../assets/DCIS.webp'
import NAISVid from '../assets/NAIS.webp'

import Overlay from '../components/Overlay';

import { educationInfo } from './data-education';

const Education = () => {

  const [accomplishmentOverlay, setAccomplishmentOverlay] = useState(false)

  const openAccomplishmentsOverlay = () => {
    setAccomplishmentOverlay(true)
  }

  const closeAccomplishmentsOverlay = () => {
    setAccomplishmentOverlay(false)
  }

  const accomplishments = educationInfo.map(education => 
    <div key={education.id} id={education.id} style={{ textAlign: "left" }}>
      <hr></hr>
      <Padding padding="10px"/>
      <h1>{education.heading}</h1>
      <br></br>
      <div>{education.information}</div>
      <Padding padding="10px"/>
    </div>
  )

  const dcisEducation = (
    <>
      <div>
      {/* https://res.cloudinary.com/do5pfqw8l/video/upload/c_crop,g_west,h_720,w_720,x_200,q_auto:best,f_auto:video/assets//education/DCIS-Video */}
        <img src={DCISVid} style={{ width: "25vw", height: "auto", borderRadius: "16px" }} alt="DCIS"/>
        <Padding padding="10px"/>
        <h1>DCIS</h1>

        
        
        <p>See my accomplishments <span onClick={openAccomplishmentsOverlay} style={{ color: "steelblue", cursor: "pointer" }}>here</span></p>

        <Overlay type={accomplishmentOverlay} function={closeAccomplishmentsOverlay} heading="Accomplishments" content={accomplishments}/>
      </div>
    </>
  );

  const naisEducation = (
    <>
      <img src={NAISVid} style={{ width: "25vw", height: "auto", borderRadius: "16px" }} alt="NAIS"/>
      <Padding padding="10px"/>
      <h1>NAIS</h1>
      <p>On April 8th, 2024, I officially joined NAISD, and began a new school chapter of my life in Ireland.</p>
    </>
  );

  return (
    <>
      <h1 className="section-heading">My Education</h1>
      <Padding padding="25px"/>
      <div className="card-grid">
        <div>{dcisEducation}</div>
        <div>{naisEducation}</div>
      </div>


      <Padding padding="50px"/>
    </>
  )
}

export default Education