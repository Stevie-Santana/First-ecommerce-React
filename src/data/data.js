//array de productos.
const productos = [
    {
        id: "1",
        img: "/public/img/cienciaFiccion/img_01.png",
        name: "La máquina del tiempo.",
        autor: "Herbert George Wells",
        year: "1895",
        category: "cienciaficcion",
        price: 850,
    },
    {
        id: "2",
        img: "/public/img/cienciaFiccion/img_02.png",
        name: "En las montañas de la locura.",
        autor: "H.P. Lovecraft",
        year: "1936",
        category: "cienciaficcion",
        price: 850,
      },
    
      {
        id:" 3",
        img: "/public/img/cienciaFiccion/img_03.png",
        name: "1984.",
        autor: " George Orwell",
        year: "1949",
        category: "cienciaficcion",
        price: 850,
      },
    
      {
        id: "4",
        img: "/public/img/cienciaFiccion/img_04.png",
        name: "Fahrenheit 451.",
        autor: "Ray Bradbury",
        year: "1953",
        category: "cienciaficcion",
        price: 850,
      },
    
      {
        id: "5",
        img: "/public/img/cienciaFiccion/img_05.png",
        name: "Soy leyenda.",
        autor: "Richard Matheson",
        year: "1954",
        category: "cienciaficcion",
        price: 850,
      },
    
      {
        id: "6",
        img: "/public/img/cienciaFiccion/img_06.png",
        name: "Dune.",
        autor: "Frank Herbert",
        year: "1965",
        category: "cienciaficcion",
        price: 850,
      },
    
      {
        id: "7",
        img: "/public/img/novelaNoir/img_07.png",
        name: " Papá querido.",
        autor: "Cynthia Wila",
        year: "2021",
        category: "novelanoir",
        price: 954,
      },
    
      {
        id: "8",
        img: "/public/img/novelaNoir/img_08.png",
        name: "La comunidad.",
        autor: "Helene Flood",
        year: "2021",
        category: "novelanoir",
        price: 954,
      },
    
      {
        id: "9",
        img: "/public/img/novelaNoir/img_09.png",
        name: "La Dalia Negra.",
        autor: "James Ellroy",
        year: "1987",
        category: "novelanoir",
        price: 954,
      },
    
      {
        id: "10",
        img: "/public/img/novelaNoir/img_10.png",
        name: "Chacal.",
        autor: "Frederick Forsyth",
        year: "1971",
        category: "novelanoir",
        price: 954,
      },
    
      {
        id: "11",
        img: "/public/img/novelaNoir/img_11.png",
        name: "La Novia Gitana.",
        autor: "Carmen Mola",
        year: "2018",
        category: "novelanoir",
        price: 954,
      },
    
      {
        id: "12",
        img: "/public/img/novelaNoir/img_12.png",
        name: "Abril Rojo.",
        autor: "Santiago Roncagliolo",
        year: "2006",
        category: "novelanoir",
        price: 954,
      },
];



const obtenerProductos = () => {
    return new Promise( (resolve, reject) => {
       setTimeout(() => {
         resolve(productos)
       }, 2000);     
    });
};

export default obtenerProductos
