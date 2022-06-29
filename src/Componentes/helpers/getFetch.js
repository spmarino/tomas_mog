import anchoa from '../../Imagenes/anchoa.jpg';


let productos = [
    {id : '1',
        name: 'pizza',
            categoria:'pizza',
                price: 1260,
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },
    {id : '2',
        name: 'pizza',
        categoria:'pizza',
                price: 1200,
                        img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '3',
        name: 'pizza',
        categoria:'pizza',
                price: 1650,
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '4',
        name: 'pizza',
        categoria:'pizza',
                price: 1500,
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '5',
        name: 'pizza',
        categoria:'pizza',
                price: 1500,
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '6',
        name: 'chocotorta',
        categoria:'postre',
                price: 1100,
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '7',
        name: 'tiramisu',
        categoria:'postre',
                price: 1200,
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '8',
        name: 'helado',
        categoria:'postre',
                price: 1000,
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
];

export const getFetch = () => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
                resolve(productos)
            })
    }, 2000)
    
}

//Detalle de producto

export const getOneFetch = (id) => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(productos.find ((producto) => +producto.id === +id))
        }, 2000)
    })
}



