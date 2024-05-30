import React from 'react'
import Padding from '../components/Padding'
import DCISVid from '../assets/DCIS.png'
import NAISVid from '../assets/NAIS.png'

const Education = () => {

  const dcisEducation = (
    <>
      <div>
      {/* https://res.cloudinary.com/do5pfqw8l/video/upload/c_crop,g_west,h_720,w_720,x_200,q_auto:best,f_auto:video/assets//education/DCIS-Video */}
        <img playsInline loop autoPlay={true} src={DCISVid} style={{ width: "25vw", height: "auto", borderRadius: "16px" }}/>
        <Padding padding="10px"/>
        <p>In 2019, I joined Dover Court International School Singapore</p>
      </div>
    </>
  );

  const naisEducation = (
    <>
      <img playsInline loop autoPlay={true} src={NAISVid} style={{ width: "25vw", height: "auto", borderRadius: "16px" }}/>
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
    </>
  )
}

export default Education