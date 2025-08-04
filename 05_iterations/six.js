// const coding = ['js', 'ruby','python','java']

// const values = coding.forEach( (item)=> {
//     console.log(item);
//     return item
// })
// console.log(values);



const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num)=> num>4 )
// console.log(newNums);

// const newNums = myNums.filter( (num)=>{
//     return num>4
// } )




// const newNums = []
// myNums.forEach((num)=> {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [
  {
    title: "The Silent Valley",
    genre: "Mystery",
    publish: 2018,
    edition: "1st"
  },
  {
    title: "Journey to Mars",
    genre: "Science Fiction",
    publish: 2020,
    edition: "2nd"
  },
  {
    title: "Love in Autumn",
    genre: "Romance",
    publish: 2015,
    edition: "3rd"
  },
  {
    title: "Ancient Civilizations",
    genre: "History",
    publish: 2012,
    edition: "1st"
  },
  {
    title: "The Art of Coding",
    genre: "Technology",
    publish: 2021,
    edition: "4th"
  },
  {
    title: "Into the Wild",
    genre: "Adventure",
    publish: 2017,
    edition: "2nd"
  },
  {
    title: "Mastering JavaScript",
    genre: "Programming",
    publish: 2023,
    edition: "5th"
  },
  {
    title: "Psychology 101",
    genre: "Education",
    publish: 2016,
    edition: "3rd"
  },
  {
    title: "Cooking Made Easy",
    genre: "Lifestyle",
    publish: 2019,
    edition: "2nd"
  },
  {
    title: "The World Beneath",
    genre: "Fantasy",
    publish: 2022,
    edition: "1st"
  }
];

let userBooks = books.filter(( bk)=>bk.genre ==='History' )
 userBooks= books.filter( (bk) => {
    return bk.publish >=2000 && bk.genre ==="History"
})
console.log(userBooks);
