//Reduce 

const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc,currentVal){
//     console.log(`acc : ${acc} and currentVal ${currentVal}`);
    
//     return acc+currentVal
// } , 0)
// console.log(myTotal);


const myTotal = myNums.reduce( (acc,currentVal) =>  acc + currentVal, 0)

// console.log(myTotal);




 const shoppingCart = [
    {
        itemName : "js course",
        price : 2999 ,

    },
    {
        itemName : "py course",
        price : 999 ,

    },
    {
        itemName : "mobile course",
        price : 5999 ,

    },
    {
        itemName : "DS course",
        price : 12999 ,

    },
    
 ]

 const totalPrice= shoppingCart.reduce( (acc,item) => acc + item.price ,0)
 console.log(totalPrice);
 