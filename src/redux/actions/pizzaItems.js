export const setItems = (payload) => ({
  type: 'SET_ITEMS',
  payload,
});
export const setLoader = (payload) => ({
  type: 'SET_LOADER',
  payload,
});

export const fetchItems = (url) => {
  return async (dispatch) => {
     dispatch(setLoader(false))

     fetch(url)
     .then((data) => data.json())
     .then((res) => {
       dispatch(setItems(res))
     });

  }
};
