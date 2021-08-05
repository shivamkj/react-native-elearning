const initialState = {
  loading: false,
  error: false,
  isLoggedIn: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'loading':
      return {...state, loading: action.payload, error: false};
    case 'error':
      return {...state, error: action.payload, loading: false};
    case 'auth':
      return {...state, isLoggedIn: action.payload, loading: false};
  }
};

export {initialState, reducer};
