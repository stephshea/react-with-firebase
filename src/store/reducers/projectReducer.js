const initState = {
  projects: [
    {id: '1', title: 'title1', content: 'content for 1'},
    {id: '2', title: 'title2', content: 'content for 2'},
    {id: '3', title: 'title3', content: 'content for 3'}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer