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
         <button type="submit" className="btn-form">[Add To Jar]</button>
        </div>
      </form>
      )
    }
}

export default Form
