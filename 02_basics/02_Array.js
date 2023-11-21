const marval_heros = ["Ironman", "thod", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros); // array
// console.log(marval_heros[3]); // 3rd array is particular element
// console.log(marval_heros[3][1]); // access the 2nd element of 3rd element

// const allHeros = marval_heros.concat(dc_heros) // parforming new array 3rd element is not dc_heros it's 4,5,6
// console.log(allHeros);

const all_new_Heros = [...marval_heros, ...dc_heros] // it's call spret (same as concat)
// console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6, ], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // sub array is cavar in sigle array
// console.log(real_another_array);

// console.log(Array.isArray("kushal")); // check array or not
// console.log(Array.from("kushal")); // canvart string to array
// console.log(Array.from({name: "kushal"})); // emplty (not easly andarstand)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));