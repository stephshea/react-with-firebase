import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id} </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda maxime, veritatis magni quibusdam ratione praesentium dolores odio omnis deleniti aspernatur laboriosam fugiat vero tempore obcaecati repudiandae quos nesciunt? Repellendus, suscipit.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Ab</div>
          <div>Oct 1, 5am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
