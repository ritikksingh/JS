const marvelHeros= ["thor", "spiderMan", "Ironman"]
const DcHero = ["superman", "flas", "batman"]

// marvelHeros.push(DcHero)

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const allHero= marvelHeros.concat(DcHero)
// console.log(allHero);

// const all_new_hero= [...marvelHeros, ...DcHero]
// console.log(all_new_hero);

// const anotherArray = [1,2,3,[4,5,6],7,[6,8,[4,5]]]
// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray("Ritik"));
console.log(Array.from("Ritik"));

console.log(Array.from({name:"Ritik"}));  //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
