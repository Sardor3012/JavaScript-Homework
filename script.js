let arr = [
    {
        name: 'moloko',
        price: 10000
    },
    {
        name: 'shokolad',
        price: 5400
    },
    {
        name: 'water',
        price: 4000
    },
    {
        name: 'coca cola',
        price: 9000
    },
    {
        name: 'chocotella',
        price: 20000
    },
    {
        name: 'chips',
        price: 17000
    },
    {
        name: 'pelmeshki',
        price: 22000
    },
    {
        name: 'vodka',
        price: 55000
    },
    {
        name: 'shorts',
        price: 50000
    },
    {
        name: 'parlament',
        price: 16000
    },
    {
        name: 'aybon gold',
        price: 10000
    }
]
let ask = prompt('Что вы хотите найти?')
let filtered = arr.filter(item => {
    let val = arr.includes(ask)

    if (val === arr.name) {
        alert(arr.name)
    } else {
        alert('По вашему запросу ничего не найдено')
    }
})

