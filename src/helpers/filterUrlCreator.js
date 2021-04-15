import { filterParametrs } from './parametrs';

const PIZZA_ITEMS_BASE_URL_LOCAL = 'http://localhost:3000/db.json';

const PIZZA_ITEMS_BASE_URL = 'http://localhost:3001/items';

// export const PIZZA_ITEMS_URL = 'http://localhost:3001/items?_sort=popular&_order=desc'; // for json-server
export const PIZZA_ITEMS_URL = PIZZA_ITEMS_BASE_URL_LOCAL;

export const createUrl = (params) => {
  let newUrl = PIZZA_ITEMS_BASE_URL;

  //params -> params.type , params.category

  //filter type
  const sortField_type = filterParametrs.types.find((p) => p.type === params.type);

  //filter category
  const sortField_category = params.category;

  newUrl =
    newUrl +
    `?_sort=${sortField_type.field}&_order=${sortField_type.order}${
      sortField_category ? `&type_like=${sortField_category}` : ``
    }`;

  // return newUrl; //for json server

  return PIZZA_ITEMS_BASE_URL_LOCAL;
};
