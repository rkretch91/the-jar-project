import React from 'react'

class Form extends React.Component{
  render() {
    return(
      <form name="add" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="add" />
        <div>
         <input type="text" name="new" />
        </div>
        <div>
         <input type="submit" className="btn-form" value="[Add To Jar]"/>
        </div>
      </form>
      )
    }
}

export default Form
