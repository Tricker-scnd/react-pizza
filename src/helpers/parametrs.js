const categories = [
  { type: '', category: 'Все' },
  { type: 'Мясная', category: 'Мясные' },
  { type: 'Вегетарианская', category: 'Вегетарианские' },
  { type: 'Гриль', category: 'Гриль' },
  { type: 'Острая', category: 'Острые' },
  { type: 'Закрытая', category: 'Закрытые' },
];
const types = [
  { type: 1, label: 'Популярности', field: 'popular', order:'desc' },
  { type: 2, label: 'Цене', field: 'price',order:'asc' },
];

export const filterParametrs = {
  categories,
  types,
};
