import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render () {
    // console.log(this.props);
    const { projects } = this.props;

    return(
      <div className="dashboard container">
        <div className="row">
          {/*left project list*/}
          <div className="col s12 m6">
            <ProjectList projects ={projects} />
            {/*right notifications*/}
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      </div>   
    )
  } 
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)