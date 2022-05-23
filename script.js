let arr = [
    {   
        name: 'tesla S',
        comp: 'Tesla',
        price: 30000,
        color: "white",
        engine: 2.4
    },
    {   
        name: 'audi TT',
        comp: 'volkswagen',
        color: "yellow",
        price: 44000,
        engine: 1.8
    },
    {   
        name: 'maserati',
        comp: 'stellantis',
        color: "white",
        price: 50000,
        engine: 4.7
    },
    {   
        name: 'tesla X',
        comp: 'Tesla',
        price: 45000,
        color: "black",
        engine: 2.4
    },
    {   
        name: 'Mercedes Maybach',
        comp: 'Mercedes',
        color: "black",
        price: 180000,
        engine: 3.2    
    },
    {   
        name: 'BMW I8',
        comp: 'bmw',
        color: "blue",
        price: 250000,
        engine: 4.7
    },
    {   
        name: 'Bugatti Chiron',
        comp: 'Bugatti',
        price: 100000,
        color: "blue",
        engine: 2.9
    },
    {   name: 'Supra',
        comp: 'Tayota',
        color: "black",
        price: 90000,
        engine: 3.0    
    },
    {   
        name: 'McClaren',
        comp: 'Claren',
        color: "gold",
        price: 250000,
        engine: 5.0
    },
]

let clientQuery = {
    name: prompt('Введите название машины')
}

arr.filter(item => {
    if (item.name.toLowerCase() === clientQuery.name.toLowerCase()) {
        document.write(`
            name: ${item.name}, <br>
            comp: ${item.comp}, <br>
            color: ${item.color}, <br>
            price: ${item.price}, <br>
            engine: ${item.engine}
        `)
    }
})