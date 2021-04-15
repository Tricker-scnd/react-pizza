import { createUrl } from '../../helpers/filterUrlCreator';

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
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        dispatch(setItems(res.items)); //for  local
        // dispatch(setItems(res)); //for json server
        dispatch(setLoader(false));
      })
      .catch((e) => {
        throw new Error(e);
      });
  };
};

export const fetchFilterItems = () => {
  return async (dispatch, getState) => {
    dispatch(setLoader(true));
    const { filters } = getState();

    const url = createUrl({ type: filters.activeType, category: filters.activeCategory });

    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        dispatch(setItems(res.items)); //for  local
        // dispatch(setItems(res)); //for json server
        dispatch(setLoader(false));
      })
      .catch((e) => {
        throw new Error(e);
      });
  };
};
