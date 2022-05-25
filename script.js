// let arr = [
//     {
//         name: 'milk',
//         type: 'milk'
//     },
//     {
//         name: 'govyadina',
//         type: 'meat'
//     },
//     {
//         name: 'tvorog',
//         type: 'milk'
//     },
//     {
//         name: 'apple',
//         type: 'fruit'
//     },
//     {
//         name: 'baranina',
//         type: 'meat'
//     },
//     {
//         name: 'yogurt',
//         type: 'milk'
//     },
//     {
//         name: 'banana',
//         type: 'fruit'
//     }
// ]       

// let categories = [
//     {
//         type: 'milk',
//         count: 0,
//         price: 10000
//     },
//     {
//         type: 'fruit',
//         count: 0,
//         price: 6000
//     },
//     {
//         type: 'meat',
//         count: 0,
//         price: 80000
//     },
// ]
// for(let item of arr) {
//     for(let item2 of categories){
//         if (item.type === item2.type) {
//             item2.count++
//         }
//     }
// }
// console.log(categories);

let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]
let faculity_arr = []

categories.filter(item => {
    item.course = item.course.trim()
    item.course = item.course.toLowerCase()
})

arr.filter(item => {
    item.info.faculity =  item.info.faculity.trim()
    item.info.faculity =  item.info.faculity.toLowerCase()
})

arr.filter(item => {
    faculity_arr.push(item.info.faculity)
})

for(let item of arr) {
    for(let item2 of categories){
        if (item.info.faculity === item2.course) {
            item2.count++
        }
    }
}

console.log(categories);

