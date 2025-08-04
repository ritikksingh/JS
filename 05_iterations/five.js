const coding = ['js', 'ruby','python','java']

// coding.forEach( function (item){
//     // console.log(item);
    
// })



// coding.forEach((val) => {
//     console.log(val);
    
// })


// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item,index,arr);
    
// })



const myCoading = [
    {
        languageName : "JavaScript",
        languageFile : "js"
    },

    {
        languageName : "java",
        languageFile : "java"
    },

    {
        languageName : "python",
        languageFile : "py"
    }
]

myCoading.forEach((item) => {

    console.log(item.languageName);
    
})