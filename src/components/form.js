import React from 'react'

const Form = () => (
    <div className="field">
      <form name="add" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field"/>
        <div>
         <input type="text" name="new" id="new" />
        </div>
        <input type="submit" className="btn-form" value="Add To Jar"/>
      </form>
    </div>
  )

export default Form
