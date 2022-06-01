// function min(num1, num2) {
//     Math.min(num1, num2)
// }
// min(1, 2)

// function min2([num1, num2]) {
//     Math.min([num1, num2])
// }
// min2([1, 2])

let name = 'Sardor'
let surname = 'Absamatov'
let age = 13
let school = 35

function GetRandomID(n,s,a,sc) {
    let ids = [
        `${n}${a}${sc}`, 
        `${a}${n}${s}`,
        `${a}${n}${sc}`,
        `${n}${s}${a}${sc}` 
    ]
    let rnd = Math.round(Math.random() * ids.length)

    console.log(ids[rnd]);
}

GetRandomID(name, surname, age, school)


