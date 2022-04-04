import React from 'react'
import './About.scss'
export default function About() {
  return (
    <div className='wrapper about'>
      <div className="container about__container padding">
        <h1 className="about__header">
        You may <br/> to do <span className="about__header-no-part">no</span>thing</h1>
        <span className="about__subheader">
          We will do <span className="about__subheader-every-part">every</span>thing.</span>
        <p className="about__p1">
          Nothing Co. provides services to grow and support your business. 
          We are developing, analizing, supporting and promoting different products of our clients.
        </p>

        <div className="about__team">
          <h2 className="about__team-header">Our team</h2>
          <span className="about__team-subheader">
            Our engineers and analysts are experts with years of experience.
          </span>
          <div className="cardset about__team-cardset">
            <div className="card about__team-card">
              <div className="card__img-block"></div>
              <span className="card__expert-name">Anthony Martin</span>
              <span className="card__specialization">Full stack developer</span>
              <span className="card__experiance">10 years of experience</span>
            </div>
            <div className="card about__team-card">
              <div className="card__img-block"></div>
              <span className="card__expert-name">Ann White</span>
              <span className="card__specialization">UI/UX designer</span>
              <span className="card__experiance">15 years of experience</span>
            </div>
            <div className="card about__team-card">
              <div className="card__img-block"></div>
              <span className="card__expert-name">Tony Hartson</span>
              <span className="card__specialization">Data analyst</span>
              <span className="card__experiance">7 years of experience</span>
            </div>
            <div className="card about__team-card">
              <div className="card__img-block"></div>
              <span className="card__expert-name">Arnold Carrey</span>
              <span className="card__specialization">Front-end developer</span>
              <span className="card__experiance">11 years of experience</span>
            </div>
          </div>
        </div>

        <div className="about__technologies">
          <h2 className="about__technologies-header">Our stack</h2>
          <span className="about__technologies-subheader">What technologies do we use</span>
          <div className="cardset about__technologies-cardset">
            <div className="card about__technologie-card">
              <div className="about__technologie-logo"></div>
              <span className="about__technologie-name">Node.js</span>
            </div>
            <div className="card about__technologie-card">
              <div className="about__technologie-logo"></div>
              <span className="about__technologie-name">React</span>
            </div>
            <div className="card about__technologie-card">
              <div className="about__technologie-logo"></div>
              <span className="about__technologie-name">Pandas</span>
            </div>
            <div className="card about__technologie-card">
              <div className="about__technologie-logo"></div>
              <span className="about__technologie-name">MongoDB</span>
            </div>
            <div className="card about__technologie-card">
              <div className="about__technologie-logo"></div>
              <span className="about__technologie-name">Pytorch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
