import React from 'react'

const Form = () => (
    <div className="form">
      <form name="add-to-jar-form" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="add-to-jar-form" />
        <input type="text"/>
        <button type="submit" className="btn-form" defaultValue="Submit your own">Add To Jar</button>
      </form>
    </div>
)

export default Form
