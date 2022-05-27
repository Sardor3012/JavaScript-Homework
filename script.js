let arr = [12, 12, 'hello', true, {}, null, 'str']

let categories = [
    {
        type: "string",
        count: 0
    },
    {
        type: "number",
        count: 0
    },
    {
        type: "boolean",
        count: 0
    },
    {
        type: "object",
        count: 0
    },
]

for(let item of arr) {
    for(let item2 of categories) {
        if (item === item2.type) {
            item2.count++
        }
    }
}

console.log(categories);