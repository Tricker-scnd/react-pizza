const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: {},
};

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: action.payload.items,
        totalPrice: action.payload.price,
        totalCount: { ...state.totalCount, [action.payload.index]: action.payload.totalCount },
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: {},
      };
    case 'PLUS_ITEM_COUNT': {
      const diffPrice = Number(state.items[action.payload.id][action.payload.key].price);
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            [action.payload.key]: {
              ...state.items[action.payload.id][action.payload.key],
              count: state.items[action.payload.id][action.payload.key].count + 1,
            },
          },
        },
        totalPrice: Number((state.totalPrice + diffPrice).toFixed(2)),
        totalCount: {
          ...state.totalCount,
          [action.payload.id]: state.totalCount[action.payload.id] + 1,
        },
      };
    }
    case 'MINUS_ITEM_COUNT': {
      const diffPrice = Number(state.items[action.payload.id][action.payload.key].price);
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            [action.payload.key]: {
              ...state.items[action.payload.id][action.payload.key],
              count: state.items[action.payload.id][action.payload.key].count - 1,
            },
          },
        },
        totalPrice: Number((state.totalPrice - diffPrice).toFixed(2)),
        totalCount: {
          ...state.totalCount,
          [action.payload.id]: state.totalCount[action.payload.id] - 1,
        },
      };
    }
    case 'DELETE_ITEM': {
      const diffPrice = Number(
        state.items[action.payload.id][action.payload.key].price * action.payload.count,
      );

      const newItemsObject = {};
      Object.keys(state.items[action.payload.id])
        .filter((key) => key !== action.payload.key)
        .forEach((key) => (newItemsObject[key] = state.items[action.payload.id][key]));

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...newItemsObject,
          },
        },
        totalPrice: Number((state.totalPrice - diffPrice).toFixed(2)),
        totalCount: {
          ...state.totalCount,
          [action.payload.id]: state.totalCount[action.payload.id] - action.payload.count,
        },
      };
    }

    default:
      return state;
  }
};

export default cartItems;
