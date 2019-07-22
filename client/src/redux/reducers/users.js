//   const users = [
//     { firstname: 'a', lastname: 'b', sex: 'm', age: 1 },
//     { firstname: 'a', lastname: 'b', sex: 'm', age: 1 },
//     { firstname: 'a', lastname: 'b', sex: 'm', age: 1 },
//     { firstname: 'a', lastname: 'b', sex: 'm', age: 1 }
//   ];

const initState = {
  users: [],
  error: null,
  // deleteId: null,
  isLoading: false
};

const users = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER_LIST_START':
      return { ...state, isLoading: true };
    case 'SET_USER_LIST_SUCCESS':
      return { ...state, ...payload, isLoading: false };
    case 'SET_USER_LIST_ERROR':
      return { ...state, ...payload, isLoading: false };
    // case 'DELETE_USER_START':
    //   return { ...state, isLoading: true };
    // case 'DELETE_USER_SUCCESS':
    //   // console.log(payload._id, ' in reducer');
    //   return {
    //     ...state,
    //     users: users.filter(user => user._id !== payload._id),
    //     deleteId: payload._id,
    //     isLoading: false
    //   };
    // case 'DELETE_USER_ERROR':
    //   return { ...state, ...payload, isLoading: false };
    // // case 'INIT_DELETE':
    // //   return { ...state, ...payload };
    default:
      return state;
  }
};

export default users;
