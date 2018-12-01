import React from 'react'

const Form = () => (
      <form name="add" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" value="add" />
        <div>
         <input type="text" name="new" id="new" />
        </div>
        <div>
         <input type="submit" className="btn-form" value="[Add To Jar]"/>
        </div>
      </form>
      )

export default Form
