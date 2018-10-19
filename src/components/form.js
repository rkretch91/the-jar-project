import React from 'react'

class Form extends React.Component{
  render() {
    return(
      <form name="add" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="text" name="new" />
        <button type="submit" className="btn-form">Add To Jar</button>
        <input type="hidden" name="form-name" value="add" />
      </form>
      )
    }
}

export default Form
