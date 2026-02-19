const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
// merge two different arrays using concat method
//const allHeros = marvel_herros.concat(decodeURI.heros)
//console.log(allHeros);

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
// convert in array
console.log(Array.from("hitesh"))
nsole.log(Array.from({name:"hitesh"}))//interesting
