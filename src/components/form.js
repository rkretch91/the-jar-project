import React from 'react'

const Form = () => (
      <form name="add" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="add" />
        <input type="text" name="new" />
        <button type="submit" className="btn-form" defaultValue="Submit your own">Add To Jar</button>
      </form>
)

export default Form
