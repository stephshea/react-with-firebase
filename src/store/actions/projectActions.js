export const createProject =(project) => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project, 
      authorFirstame: 'Abby',
      authorLastName: 'Shea',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    }) 
  }
};