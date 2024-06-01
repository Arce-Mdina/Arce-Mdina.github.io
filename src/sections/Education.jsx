import React, { useState } from 'react'
import Padding from '../components/Padding'
import DCISVid from '../assets/DCIS.webp'
import NAISVid from '../assets/NAIS.webp'

import Overlay from '../components/Overlay';

import { dcisInfo, naisInfo } from './data-education';

const Education = () => {

  const [dcisAccomplishmentOverlay, setDCISAccomplishmentOverlay] = useState(false)
  const [naisAccomplishmentOverlay, setNAISAccomplishmentOverlay] = useState(false)

  const openDCISAccomplishmentsOverlay = () => {
    setDCISAccomplishmentOverlay(true)
  }

  const closeDCISAccomplishmentsOverlay = () => {
    setDCISAccomplishmentOverlay(false)
  }

  const openNAISAccomplishmentsOverlay = () => {
    setNAISAccomplishmentOverlay(true)
  }

  const closeNAISAccomplishmentsOverlay = () => {
    setNAISAccomplishmentOverlay(false)
  }

  const dcisAccomplishments = dcisInfo.map(dcis => 
    <div key={dcis.id} id={dcis.id}>
      <hr></hr>
      <Padding padding="10px"/>
      <h1>{dcis.heading}</h1>
      <br></br>
      <div>{dcis.information}</div>
      <Padding padding="10px"/>
    </div>
  )

  const naisAccomplishment = naisInfo.map(nais => 
    <div key={nais.id} id={nais.id}>
      <hr></hr>
      <Padding padding="10px"/>
      <h1>{nais.heading}</h1>
      <br></br>
      <div>{nais.information}</div>
    </div>
  )

  const dcisEducation = (
    <>
      <div>
      {/* https://res.cloudinary.com/do5pfqw8l/video/upload/c_crop,g_west,h_720,w_720,x_200,q_auto:best,f_auto:video/assets//education/DCIS-Video */}
        <img src={DCISVid} style={{ width: "25vw", height: "auto", borderRadius: "16px" }} alt="DCIS"/>
        <Padding padding="5px"/>
        <h1>DCIS</h1>

        <br></br>
        
        <p>My <span onClick={openDCISAccomplishmentsOverlay} style={{ color: "steelblue", cursor: "pointer" }}>accomplishments</span></p>

        <Overlay type={dcisAccomplishmentOverlay} function={closeDCISAccomplishmentsOverlay} heading="Accomplishments - DCIS" content={dcisAccomplishments}/>
      </div>
    </>
  );

  const naisEducation = (
    <>
      <img src={NAISVid} style={{ width: "25vw", height: "auto", borderRadius: "16px" }} alt="NAIS"/>
      <Padding padding="5px"/>
      <h1>NAIS</h1>
      <br></br>
      <p>My <span onClick={openNAISAccomplishmentsOverlay} style={{ color: "steelblue", cursor: "pointer" }}>accomplishments</span></p>

      <Overlay type={naisAccomplishmentOverlay} function={closeNAISAccomplishmentsOverlay} heading="Accomplishments - NAIS" content={naisAccomplishment}/>
    </>
  );

  return (
    <>
      <h1 className="section-heading">My Education</h1>
      <Padding padding="25px"/>
      <div className="card-grid">
        <div style={{ width: "42vw", marginBottom: "50px" }}>{dcisEducation}</div>
        <div style={{ width: "42vw", marginBottom: "50px" }}>{naisEducation}</div>
      </div>


      <Padding padding="50px"/>
    </>
  )
}

export default Education