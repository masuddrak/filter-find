const numbers=[20,4,57,5,9,665,55];
// const bigNumbers=numbers.filter(number=>number>50);
const bigNumbers=numbers.find(number=>number>50);
// console.log(bigNumbers)

const products=[
    {name:'phone',color:'red',price:40},
    {name:'phone',color:'balck',price:100},
    {name:'phone',color:'balck',price:60},
    {name:'phone',color:'green',price:50},
    {name:'phone',color:'green',price:70},
    {name:'phone',color:'red',price:120},
]
// const balckPhone=products.filter(product=>product.price<80);
const balckPhone=products.find(product=>product.price==60);
console.log(balckPhone)