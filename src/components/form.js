import React from 'react'

class Form extends React.Component(
  render() {
    return(
      <form name="add" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field"/>
        <input type="text" name="new" />
        <button type="submit" className="btn-form" defaultValue="Submit your own">Add To Jar</button>
      </form>
      )
    }
)

export default Form
