const initialState = {
  loading: false,
  error: false,
  isLoggedIn: true,
  paidCourses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {...state, loading: action.payload, error: false};
    case 'error':
      return {...state, error: action.payload, loading: false};
    case 'auth':
      return {...state, isLoggedIn: action.payload, loading: false};
    case 'paidCourses':
      return {...state, paidCourses: action.payload};
  }
};

export {initialState, reducer};
