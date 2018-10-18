import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state)
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">
            Create new project
          </h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange}/>
            <label htmlFor="title">Title</label>
          </div> 

          <div className="input-field">
          
           <textarea id="content" className="materialize-text"   onChange={this.handleChange}></textarea> 
           <label htmlFor="content">Project Content</label>

          </div> <button className="btn pink lighten-1 z-depth-0">Create</button>
          <div className="input-field">

          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(null, mapDispatchToProps)(CreateProject)
