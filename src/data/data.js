//array de productos.
const productos = [

  //Ciencia ficcion
    {
        id: "1",
        img: "/public/img/cienciaFiccion/img_01.png",
        name: "La máquina del tiempo.",
        autor: "Herbert George Wells",
        year: "1895",
        category: "cienciaficcion",
        description: "Un científico inventa una máquina para viajar a través del tiempo. En un viaje experimental llega al año 802.701 y encuentra la tierra habitada por los Eloi, pacíficos y ociosos. El Viajero del Tiempo deduce que están tan avanzados que unas máquinas deben de trabajar por ellos. Más tarde descubrirá a los malvados y depredadores Morlocks, y habrá de escapar para salvar la vida. A su regreso al presente su relato es recibido con escepticismo." , 
        price: 850,
        stock: 10,
    },
    {
        id: "2",
        img: "/public/img/cienciaFiccion/img_02.png",
        name: "En las montañas de la locura.",
        autor: "H.P. Lovecraft",
        year: "1936",
        category: "cienciaficcion",
        description: "Arkham, 1933. El profesor Dyer, un destacado geólogo, se entera de que una expedición a la Antártida  partirá pronto con la esperanza de seguir los pasos que el mismo dio en 1931. Con la esperanza de disuadirlos de tal iniciativa, Dyer relata los trágicos sucesos a los que sobrevivió en su expedición y que rechazó contar a su vuelta por miedo a que lo tomasen por loco.",
        price: 850,
        stock: 10,

      },
    
      {
        id:" 3",
        img: "/public/img/cienciaFiccion/img_03.png",
        name: "1984.",
        autor: " George Orwell",
        year: "1949",
        category: "cienciaficcion",
        description: "Londres, 1984: el Gran Hermano controla hasta el último detalle de la vida privada de los ciudadanos. Winston Smith trabaja en el Ministerio de la Verdad reescribiendo y retocando la historia para un estado totalitario que somete de forma despiadada a la población, hasta que siente que no quiere contribuir más a este sistema perverso y decide rebelarse.",
        price: 850,
        stock: 10,

      },
    
      {
        id: "4",
        img: "/public/img/cienciaFiccion/img_04.png",
        name: "Fahrenheit 451.",
        autor: "Ray Bradbury",
        year: "1953",
        category: "cienciaficcion",
        description: "En un futuro sombrío y turbador, Montag forma parte de una extraña brigada de bomberos cuya misión no es sofocar incendios, sino producirlos para quemar libros. Y es que en su mundo está prohibido leer, porque lo que se quiere suprimir es la capacidad de pensar. Una vez que Montag lo comprenda, alertado por una organización secreta dedicada a memorizar volúmenes enteros, sabrá que ha llegado el momento de elegir entre la obediencia y la rebeldía. En esta nueva traducción, que captura mejor que nunca toda la fuerza del original, la clásica distopía de Ray Bradbury sigue alertándonos sobre las peores facetas del conformismo moderno.",
        price: 850,
        stock: 10,

      },
    
      {
        id: "5",
        img: "/public/img/cienciaFiccion/img_05.png",
        name: "Soy leyenda.",
        autor: "Richard Matheson",
        year: "1954",
        category: "cienciaficcion",
        description: "Robert Neville es el único superviviente de una guerra bacteriológica que ha asolado el planeta y convertido al resto de la humanidad en vampiros. Su vida se ha reducido a asesinar el máximo número posible de estos seres sanguinarios durante el día, y a soportar su asedio cada noche. Para ellos, el autentico monstruo es este hombre que lucha por subsistir en un nuevo orden establecido. Todo un clásico en su genero, este es un perturbador relato sobre la soledad y el aislamiento y una reflexión sobre los binomios como normalidad y anormalidad, bien y mal, que se evidencian como una mera convención derivada del temor y el desconcierto ante lo diferente.",
        price: 850,
        stock: 8,

      },
    
      {
        id: "6",
        img: "/public/img/cienciaFiccion/img_06.png",
        name: "Dune.",
        autor: "Frank Herbert",
        year: "1965",
        category: "cienciaficcion",
        description: "Arrakis: un planeta desértico donde el agua es el bien más preciado y, donde llorar a los muertos es el símbolo de máxima prodigalidad. Paul Atreides: un adolescente marcado por un destino singular, dotado de extraños poderes y, abocado a convertirse en dictador, mesías y mártir. Los Harkonnen: personificación de las intrigas que rodean el Imperio Galáctico, buscan obtener el control sobre Arrakis para disponer de la melange, preciosa especia y uno de los bienes más codiciados del universo. Los Fremen: seres libres que han convertido el inhóspito paraje de Dune en su hogar, y que se sienten orgullosos de su pasado y temerosos de su futuro.",
        price: 850,
        stock: 8,

      },
    


    //Novela Noir
      {
        id: "7",
        img: "/img/novelaNoir/img_07.png",
        name: " Papá querido.",
        autor: "Cynthia Wila",
        year: "2021",
        category: "novelanoir",
        description: "María recibe una llamada inesperada: su anciano padre –con el que comparte una historia densa de amor, odio, secretos y silencios– está internado en un hospital de Miami. Tras veinte años de distancia autoimpuesta, María decide viajar para estar presente en lo que quizá sean los últimos días de ese hombre que tanto quiso y padeció, y también para acompañar a su madre, víctima silenciosa del carácter poderoso y terrible de su marido. Lo que María no alcanza a vislumbrar es que con ese viaje se abrirá para ella una vía incierta de descubrimientos y revelaciones. Con el transcurso de los días y mientras lidia con un sistema de salud ajeno y despiadado, María comprende que explorar su pasado será indispensable para despejar el camino de una vida en la que su felicidad sea posible. Cynthia Wila entrega a sus lectores una novela íntima y a la vez universal, donde vuelve a mostrar su talento para crear personajes de carne y hueso en los que es posible reconocerse. Con un suspenso psicológico que la recorre de principio a fin, “Papá querido” se interna en el delicado terreno de las relaciones filiales y muestra hasta qué punto pueden dañarnos –o salvarnos– justamente aquellos a quienes más amamos." ,
        price: 954,
        stock: 7,
      },
    
      {
        id: "8",
        img: "/public/img/novelaNoir/img_08.png",
        name: "La comunidad.",
        autor: "Helene Flood",
        year: "2021",
        category: "novelanoir",
        description: "Tus secretos ya no estan a salvo. Entra en La comunidad. En Kastanjesvingen, un vecindario silencioso a un paso del tumulto de la ciudad habitado por doctores, artistas y gente del mundo de la televisión, nunca pasa nada, es el tipo de lugar que todos querrían para sus hijos. Allí vive Rikke, en uno de los cuatro espaciosos pisos del complejo, con su familia: su marido Asmund y sus hijos Emma y Lukas. Sus vidas son tranquilas, armoniosas, perfectas. Pero todo cambia cuando aparece el cuerpo de uno de los vecinos, Jørgen, apuñalado en su casa. A medida que la policía investiga y la prensa acecha a los vecinos, resulta evidente que todos tenían un motivo para asesinar a Jørgen, hasta la propia Rikke, que pronto se da cuenta de lo poco que sabe realmente sobre la gente que vive a su lado. Quizás no se llevaban tan bien y quizás todos esconden algo, porque…¿Cuánto saben realmente los unos de los otros?",
        price: 954,
        stock: 7,
      },
    
      {
        id: "9",
        img: "/public/img/novelaNoir/img_09.png",
        name: "La Dalia Negra.",
        autor: "James Ellroy",
        year: "1987",
        category: "novelanoir",
        description:"15 de enero de 1947. Los Çngeles, un solar desocupado. El cadáver de una mujer de veinticinco años, desnudo y seccionado en dos partes. El medico forense determina que ha sido torturada durante días mientras ella seguía consciente. Un periodista bautiza a la víctima como la Dalia Negra. Los policías Bucky Bleichert y Lee Blanchard, dos ex boxeadores conocidos como Hielo y Fuego, son puestos al frente del caso. Al sumergirse en los bajos fondos de Los Çngeles para averiguar quien era la Dalia se verán atrapados en un circo mediático y en una investigación policial plagada de pistas falsas, intereses políticos y dificultades; un caso irresoluble que acabará por obsesionarles.",
        price: 954,
        stock: 7,
      },
    
      {
        id: "10",
        img: "/public/img/novelaNoir/img_10.png",
        name: "Chacal.",
        autor: "Frederick Forsyth",
        year: "1971",
        category: "novelanoir",
        description: "Chacal es uno de los thrillers más célebres jamás escritos, la obra que dio a conocer al maestro del suspense Frederick Forsyth. ¿Se trata solo de una novela? ¿Mezcla ficción y realidad? ¿Ocurrió realmente? Piloto de motocicletas, aspirante a torero en Málaga y aviador de la RAF a los diecisiete años, Frederick Forsyth empezó muy joven en el mundo del periodismo. Enviado por la agencia Reuter a cubrir los viajes del general De Gaulle, en la época de los atentados de la OAS, decidió contar un atentado desconocido: el que se le encargó a Chacal, un asesino legendario.",
        price: 954,
        stock: 5,
      },
    
      {
        id: "11",
        img: "/public/img/novelaNoir/img_11.png",
        name: "La Novia Gitana.",
        autor: "Carmen Mola",
        year: "2018",
        category: "novelanoir",
        description: "Susana Macaya, de padre gitano pero educada como paya, desaparece tras su fiesta de despedida de soltera. El cadáver es encontrado dos días despues en la Quinta de Vista Alegre del madrileño barrio de Carabanchel. Podría tratarse de un asesinato más, si no fuera por el hecho de que la víctima ha sido torturada siguiendo un ritual insólito y atroz,",
        price: 954,
        stock: 5,
      },
    
      {
        id: "12",
        img: "/public/img/novelaNoir/img_12.png",
        name: "Abril Rojo.",
        autor: "Santiago Roncagliolo",
        year: "2006",
        category: "novelanoir",
        description: "Abril rojo es un relato policiaco escalofriante ambientado en uno de los periodos más sangrientos de la historia reciente de Perú. Félix Chacaltana Saldívar es un burócrata que lleva una vida sin sobresaltos como fiscal del distrito adjunto en Lima. Pero todo cambia cuando es enviado a su natal Ayacucho, al que regresa después de muchos años y donde debe encargarse de una extraña investigación de asesinato. En medio de las celebraciones de Semana Santa y enfrentado a la indiferencia de sus superiores, las pesquisas lo llevarán por caminos cada vez más oscuros, en los que descubrirá hasta dónde pueden llegar un hombre y la sociedad cuando la muerte se convierte en la única certeza.",
        price: 954,
        stock: 5,
      },

    
    //Fantasia epica   
      {
        id: "13",
        img: "/public/img/fantasiaEpica/img_13.png",
        name: "Al Filo de las Sombras.",
        autor: "Brent Weeks",
        year: "2008",
        category: "fantasiaEpica",
        description: "La segunda parte de «El Ángel de la Noche», la trilogía de fantasía  épica que dio a conocer a un nuevo autor del género, Brent Weeks. La partida ha empezado. Todas las piezas han tomado posiciones e inician sus movimientos. Todas menos una. Tras la muerte de Durzo Blint, su maestro, y de Logan, su mejor amigo y  el legítimo heredero al trono, Kylar Stern siente que ya nada le ata a  Cenaria, un país sometido a los caprichos del invasor: el rey dios  Garoth Ursuul. Mientras los incendios y el pillaje se adueñan de la  metrópoli, mientras miles de refugiados emprenden la huida y los  resistentes se disponen a luchar, Kylar decide renunciar a su antigua vida.",
        price: 1200,
        stock: 3,
        },
      
      {
        id: "14",
        img: "/public/img/fantasiaEpica/img_14.png",
        name: "El Sueño de los Muertos",
        autor: "Virginia Pérez de la Puente",
        year: 2013,
        category: "fantasiaEpica",
        description: "En un reino al borde de la guerra los destinos de un futuro rey y un esclavo que no se conocen parecen estar irremediablemente unidos.El príncipe heredero de Novana, Danekal, intenta averiguar quién está detrás del atentado que casi le cuesta la vida a su padre en vísperas de la firma de un tratado con la reina de un país vecino. Al mismo tiempo deberá lidiar con los nobles que esperan la muerte del rey Tearate para hacerse con la corona, una horda invasora y sus propios fantasmas interiores. Ajeno a ello, Kal, un hombre esclavizado por su capacidadpara encauzar una antigua magia llamada Shah, pugna por liberarse de las cadenas que lo someten a la mujer que obtiene de él su poder: su Melliza. Pese a sus enormes diferencias, el futuro rey y el esclavo descubrirán que existe entre ellos una unión, y que es mucho más profunda de lo que ambos suponen.",
        price: 1289,
        stock: 3,
      },   

      {
        id: "15",
        img: "/public/img/fantasiaEpica/img_15.png",
        name: "El Señor de los Anillos- La Comunidad del Anillo",
        autor: "J.R.R.Tolkien",
        year: 1978,
        category: "fantasiaEpica",
        description: "En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.",
        price: 1500,
        stock: 4,
      },

      {
        id:"16",
        img: "/public/img/fantasiaEpica/img_16.png",
        name: "Tormenta de Espadas-Cancion de Hielo y Fuego",
        autor: "George R.R. Martin",
        year: 2000,
        category: "fantasiaEpica",
        description: "Las huestes de los fugaces reyes de Poniente, descompuestas en hordas, asuelan y esquilman una tierra castigada por la guerra e indefensa ante un invierno que se anuncia inusitadamente crudo. Las alianzas nacen y se desvanecen como volutas de humo bajo el viento helado del Norte. Ajena a las intrigas palaciegas, e ignorante del auténtico peligro en ciernes, la Guardia de la Noche se ve desbordada por los salvajes. Y al otro lado del mundo, Daenerys Targaryen intenta reclutar en las Ciudades Libres un ejército con el que desembarcar en su tierra.",
        price: 900,
        stock: 4,
      },

      {
        id: "17",
        img: "/public/img/fantasiaEpica/img_17.png",
        name: "Neverwhere",
        autor: "Neil Gaiman",
        year: 1996,
        category: "fantasiaEpica",
        description: "En el subsuelo de Londres, como debajo de cada gran ciudad, existe un mundo desconocido e invisible, plagado de extraños seres, en el que sobrevivir depende de abrir las puertas adecuadas... Hay mundos bajo tus pies, espías bajo las escaleras y formas que esperan al otro lado de los portales, que sólo has atisbado en tus sueños.",
        price: 580,
        stock: 3,
      },

      {
        id: "18",
        img: "/public/img/fantasiaEpica/img_18.png",
        name: "El Hobbit",
        autor: "J.R.R.Tolkien",
        year: 1937,
        category: "fantasiaEpica",
        description: "Un gran clásico moderno y el preludio de las vastas y poderosas mitologías de El Señor de los Anillos. Smaug parecía profundamente dormido cuando Bilbo espió una vez más desde la entrada. ¡Pero fingía estar dormido! ¡Estaba vigilando la entrada del túnel!... Sacado de su cómodo agujero-hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio de una conspiración que pretende apoderarse del tesoro de Smaug el Magnífico, un enorme y muy peligroso dragón...",
        price: 1200,
        stock: 5, 
      },
    

      
];



const obtenerProductos = () => {
    return new Promise( (resolve, reject) => {
       setTimeout(() => {
         resolve(productos)
       }, 2000);     
    });
};

export default obtenerProductos;
