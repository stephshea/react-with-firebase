const initState = {
  projects: [
    {id: '1', title: 'title1', content: 'content for 1'},
    {id: '2', title: 'title2', content: 'content for 2'},
    {id: '3', title: 'title3', content: 'content for 3'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default: 
      return state;
  }
}

export default projectReducer