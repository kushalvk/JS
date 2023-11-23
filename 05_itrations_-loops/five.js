const coding = ["js", "ruby", "java", "python", "cpp"]

// 1)
coding.forEach( function (item) { // by functuon
    // console.log(item);
} )

// 2)
coding.forEach( (item) => { // by aero functuon
    // console.log(item);
} )

// 3)
function PrintMe(item) {
    // console.log(item);
}
coding.forEach(PrintMe)

// by forEach access index or array
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

// object in array access by foreach function
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )