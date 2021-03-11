const initialState = {
  items: [],
  isLoading: true,
};

const pizzaItems = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'SET_LOADER':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default pizzaItems;
