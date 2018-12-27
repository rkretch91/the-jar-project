import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Form from '../components/form'
import jar from '../images/the-jar-project-big.png'
import { getFunName } from '../helpers'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  grabNameValue = () => {
    this.setState({value: getFunName()})
  }

  render() {
    return (
      <Layout>
        <div className="task">
          <h2 className="task-name">{this.state.value}</h2>
        </div>
        <div className="main-jar">
          <img src={jar} alt="jar-project-logo" onClick={this.grabNameValue}/>
          <p>Instructions: Click the jar once a day for your daily task. Each task will encourage you to conquer fears, do something nice for others, or encourage spontaneity. Do it, record it, repeat (unless it isn't relevant of course!)</p>
          <Form/>
          <Link to="/page-2">About The Jar Project</Link>
        </div>

      </Layout>
    )
  }
}



export default IndexPage
