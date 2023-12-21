var PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "juice", price: "$2", stocked: false, name: "Orange"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Tomato"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "juice", price: "$3", stocked: true, name: "Mango"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "juice", price: "$2", stocked: true, name: "MIX"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
];
const sortedProducts = [...PRODUCTS].sort((a, b) => {
  const categoryOrder = { Fruits: 1, Vegetables: 2, juice: 3 };

  return categoryOrder[a.category] - categoryOrder[b.category]; 
});

PRODUCTS=sortedProducts
console.log(sortedProducts);

export default PRODUCTS;