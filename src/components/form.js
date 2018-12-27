import React from 'react'

const Form = () => (
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" name="form-name"/>
        <div>
         <input type="text" name="new" id="new" />
        </div>
        <input type="submit" className="btn-form" value="Add To Jar"/>
      </form>
  )

export default Form
