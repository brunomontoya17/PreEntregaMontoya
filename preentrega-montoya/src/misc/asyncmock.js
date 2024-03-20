
const products = [
    {
        id:1,
        name:'Procesador Intel i5',
        desc:'Procesador de 9na generacion',
        price: 600000.00,
        category_id: 1,
        img:'/cpu.png',
    },
    {
        id:2,
        name:'Procesador AMD Ryzen 7',
        desc:'Procesador de 9na generacion',
        price: 650000.00,
        category_id: 1,
        img:'/cpu.png',
    },
    {
        id:3,
        name:'Memoria RAM 8gb DDR4',
        desc:'3200 MHZ',
        price: 50000.00,
        category_id: 2,
        img:'/ram.png',
    },
    {
        id:4,
        name:'Memoria RAM 16gb DDR4',
        desc:'3200 MHZ',
        price: 110000.00,
        category_id: 2,
        img:'/ram.png',
    },
    {
        id:5,
        name:'MotherBoard ASUS',
        desc:'Socket Intel',
        price: 450000.00,
        category_id: 3,
        img:'/motherboard.png',
    },
];

const categories = [
    {
        id:1,
        name:'Procesadores',
    },
    {
        id:2,
        name:'Memorias RAM',
    },
    {
        id:3,
        name:'Placas Madre',
    },
]

export const getProducts = () => {
    return products;
}

export const getProductByID = (id) => {
    return products.find((prod) => prod.id == id);
}

export const getProductByCategory = (id_category) =>
{
    return products.filter((prod) => prod.category_id == id_category);
}

export const getCategories = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(categories);
        console.log('Enviando datos de categorias');
    },2000)
});