import React from 'react'
import Padding from '../components/Padding'
import DCISVid from '../assets/DCIS.webp'
import NAISVid from '../assets/NAIS.webp'

import Overlay from '../components/Overlay';

const Education = () => {

  const [accomplishmentOverlay, setAccomplishmentOverlay] = useState(false)

  const openAccomplishmentsOverlay = () => {
    setAccomplishmentOverlay(true)
  }

  const closeAccomplishmentsOverlay = () => {
    setAccomplishmentOverlay(false)
  }

  const accomplishments = (
    <></>
  );

  const dcisEducation = (
    <>
      <div>
      {/* https://res.cloudinary.com/do5pfqw8l/video/upload/c_crop,g_west,h_720,w_720,x_200,q_auto:best,f_auto:video/assets//education/DCIS-Video */}
        <img src={DCISVid} style={{ width: "25vw", height: "auto", borderRadius: "16px" }} alt="DCIS"/>
        <Padding padding="10px"/>
        <h1>DCIS</h1>
        <p>
          In 2019, I joined Dover Court International School Singapore. Over the course of 4.5 years there, I made a lot of friends, and studied subjects such as Computer Science, Business Studies, Global Citizenship (Politics), French etc.
        </p>
        <p>I also made some big changes to the school. For 4 years, I was a House Captain, organising House challenges that bring people together. For 2 years, I was a member of the Student Council, I helped the school to familiarise and change from Google platforms into Microsoft platforms by creating 2 out of 4 tutorial videos.</p>
        <p>See more of accomplishments <span onClick={openAccomplishmentsOverlay}>here</span></p>

        <Overlay type={accomplishmentOverlay} function={closeAccomplishmentsOverlay} heading="overlay" content={accomplishments}/>
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