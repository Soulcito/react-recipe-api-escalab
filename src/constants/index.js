const base_url = 'https://api.edamam.com/search';
const api_id = 'b17eb2a6';
const api_key= '9f3fbd68047fd47d6bba94bea6260094';

export const getApiUrl = query => `${ base_url }?q=${query}&app_id=${ api_id }&app_key=${ api_key }`;

export const predefinedFoodDishes = [
  { _id: 1, title: "Eggs", selected: false },
  { _id: 2, title: "Chicken", selected: false },
  { _id: 3, title: "Milk", selected: false },
  { _id: 4, title: "Coffee", selected: false },
  { _id: 5, title: "Banana", selected: false },
  { _id: 6, title: "Burger", selected: false },
  { _id: 7, title: "Ramen", selected: false },
  { _id: 8, title: "Curry", selected: false },
  { _id: 9, title: "Sushi", selected: false },
  { _id: 10, title: "Lasagna", selected: false },
];
export const anyFoodDishes = [
  { _id: 1, title: "Vegan" },
  { _id: 2, title: "Chips" },
  { _id: 3, title: "Cookies" },
  { _id: 4, title: "Apple" },
  { _id: 5, title: "Potato" },
  { _id: 6, title: "Tomato" },
  { _id: 7, title: "Cheese" },
  { _id: 8, title: "Meat" },
  { _id: 9, title: "Oat" },
  { _id: 10, title: "Lentils" },
];