const initialState = {
  activeType: 1,
  activeCategory: '',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return { ...state, activeCategory: action.payload };
    case 'CHANGE_TYPE':
      return { ...state, activeType: action.payload };
    default:
      return state;
  }
};

export default filters;
