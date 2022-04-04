import React from 'react'
import './ContactUs.scss'
export default function ContactUs() {
  return (
    <div className='wrapper contacts'>
      <div className="container padding contacts__container">
        <h1 className="contacts__header"> Our contacts</h1>
        <div className='contacts__phones'>
          <span className="contacts__phones-label">Phones</span>
          <span className="contacts__phone-number">712-579-7866</span>
          <span className="contacts__phone-number">253-875-0198</span>
        </div>
        <div className="contacts__emails">
          <span className="contacts__emails-label">E-mail</span>
          <span className="contacts__email">nothing@company.com</span>
        </div>
        <form className="contacts__form">
          <span className="contacts__form-label">Write us</span>
          <textarea className="contacts__form-textarea" name="" id="" cols="30" rows="10"
            placeholder='Write here your contacts and message about your project'
          ></textarea>
          <button className="contacts__form-button">Contact us</button>
        </form>
      </div>
    </div>
  )
}
