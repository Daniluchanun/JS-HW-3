for (let i = 0; i < 10; i++) {
    document.write(`
        <div>
            ljhvblerhjve
        </div>`)
}

document.write('----------------------')

for (let i = 0; i < 10; i++) {
    document.write('<div>gebgierbgibgre' + i + '</div>')
}

document.write('----------------------')

let i = 0;
while (i < 20) {
    document.write(`<h1>okten</h1>`);
    i++;
}

document.write('----------------------')

{
    let i = 1;
    while (i <= 20) {
        document.write(`<h1>oktenochik` + i + `</h1>`);
        i++;
    }
}

document.write('------------------------')

document.write(`<ul>`)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    const list = listOfItems[i];
    document.write(`<li>` + list + `</li>`)
}
document.write(`</ul>`)

document.write('------------------------')

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`
    <div class="product-card">
        <h3 class="product-title">${product.title} Price - ${product.price}</h3>
        <img src="${product.image}" alt="${product.title}" class="product-image">
    </div>`)
}

document.write('------------------------')

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

{
    let itTrue = []
    let itFalse = []
    let ages = []
    let i = 0
    while (i < users.length) {
        let user = users[i];
        if (user.age > 30) {
            ages.push(user.age)

        } else if (user.status === true) {
            itTrue.push(user);

        } else {
            itFalse.push(user)
        }
        i++
    }
    console.log(ages);
    console.log(itTrue);
    console.log(itFalse);

}

