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
        <p>Dover Court International School is a British international school in Singapore, catering to students from ages 3 to 18. It offers the National Curriculum for England, International Primary Curriculum (IPC), iGCSE & GCSE, and the IBDP.</p>

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
      <p>Nord Anglia International School Dublin is an international school in Dublin, Ireland, serving students from ages 3 to 18. It offers the International Baccalaureate programmes across all levels.</p>
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
        <div className="schools">{dcisEducation}</div>
        <div className="schools">{naisEducation}</div>
      </div>


      
    </>
  )
}

export default Education