const addItem = (items, price, totalCount, index) => ({
  type: 'ADD_ITEM',
  payload: { items, price, totalCount, index },
});

export const plusCount = (id, key) => ({
  type: 'PLUS_ITEM_COUNT',
  payload: {id,key}
});

export const minusCount = (id, key) => ({
  type: 'MINUS_ITEM_COUNT',
  payload: {id,key}
});

export const deleteItem = (id, key, count) => ({
  type: 'DELETE_ITEM',
  payload: {id,key,count}
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const addToCart = (data) => {
  return (dispatch, getState) => {
    const { cartItems } = getState();
    const { id, size, dough, price, name, image } = data;
    let newCartItems = '';

    const key = `${size};${dough}`;

    if (id in cartItems.items) {
      newCartItems = Object.assign({}, cartItems.items);
      if (key in newCartItems[id]) {
        newCartItems[id][key].count += 1;
      } else {
        newCartItems[id][key] = { count: 1, price, name, image };
      }
    } else {
      const newItem = {
        [id]: {
          [key]: { count: 1, price, name, image },
        },
      };
      newCartItems = Object.assign(cartItems.items, newItem);
    }

    let newTotalCount;
    if (cartItems.totalCount[id]) newTotalCount = cartItems.totalCount[id] + 1;
    else newTotalCount = 1;

    const newTotalPrice = Number((cartItems.totalPrice + price).toFixed(2));
    dispatch(addItem(newCartItems, newTotalPrice, newTotalCount, id));
  };
};
