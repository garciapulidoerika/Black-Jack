//-----------------------------------PRIMERA PARTE CREAR BARAJA-------------------------------------
/* let deck = [];                                           //1                   
const tipos = ['C', 'D', 'H', 'S'];                         //5
const especiales = ['A', 'J', 'Q', 'K'];                    //7

const crearDeck = () => {                                   //2
    for(let i=2; i <=10; i++) {                             //3.1  las cartas inician en 2 hasta 10
       for(let tipo of tipos) {                             //6 hacemos for of para que se ejecute ciclo dentro de ciclo
        deck.push (i + tipo);                               //4 a el numero necesitamos crearle la letra
       }
    }

    for(let tipo of tipos) {                                //8
        for(let esp of especiales)                          //9
        deck.push (esp + tipo);                             //10
    }

    deck = _.shuffle(deck);                                 //11 underscore.org para desordenar la baraja
    console.log(deck);
    return deck;                                            //12 fin
}

crearDeck(); */                                             //3

//-----------------------------------SEGUNDA PARTE PEDIR CARTA-------------------------------------

/* const pedirCarta = () => {                               //13

    if (deck.length === 0) {                                //18 condicion por si se me acaban las cartas
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();                               //17

    console.log(deck);                                      //16
    console.log(carta);                                     //15
    return carta;                                           //14
}

for (let i=0; i <=57; i++) {                                //19 asi me quitaria de a una carta hasta que se acaben. fin
    pedirCarta();                                           //13.1
} */

  
/* ------------------------TERCERA PARTE VALOR DE LAS CARTAS (unido con lo de arriba)------------------------------ */

/* let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    for(let i=2; i <=10; i++) {
       for(let tipo of tipos) {  
        deck.push (i + tipo);
       }
    }

    for(let tipo of tipos) {
        for(let esp of especiales)
        deck.push (esp + tipo);
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();
// Por ahora comentamos esto
/* const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    console.log(deck);
    console.log(carta);
    return carta;
}

for (let i=0; i <=57; i++) {
    pedirCarta();
}
 */

//const valorCarta = (carta) => {                                   //20

    // mismo de abajo pero menos resumido
    /* const valor = carta.substring(0, carta.length - 1);          //22 asi saco el valor de la carta quitando la ultima letra
    let puntos = 0;

    if( isNaN(valor)) {                                             //23 evaluar si no es un numero o si
        puntos = (valor === 'A') ? 11 : 10;                         //25 si no es un numero, va a ser una letra, si es A vale 11, si es otra vale 10
    } else {
        console.log('Es un número');                                // 24 si es un numero seria igual al valor * 1
        puntos = valor * 1;
    }
    console.log(puntos);                                            //26
} 
valorCarta('10D');                                                  //21 //27 fin
*/

/* const valor = carta.substring(0, carta.length - 1);              //lo mismo de arriba pero resumido
    return ( isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
    }
   
const valor = valorCarta('AD');
console.log({valor}); */

/*  -----------------------------------CUARTA PARTE  evento click pedir carta------------------------- */

/* let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,                                                  //35
    puntosComputadora = 0;                                              //36

// Referencias html                                                         //31
const btnPedir = document.querySelector('#btnPedir');                   //32
const puntosHTML = document.querySelectorAll('small')                              //39
//console.log(btnPedir);  comentar

const crearDeck = () => {
    for(let i=2; i <=10; i++) {
       for(let tipo of tipos) {  
        deck.push (i + tipo);
       }
    }

    for(let tipo of tipos) {
        for(let esp of especiales)
        deck.push (esp + tipo);
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();
//descomentamos
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

//    console.log(deck);                                           //28 quitar
    console.log(carta);                                           //28 quitamos estos console.log
    return carta;
}


// for (let i=0; i <=57; i++) {   //PILAS CON ESTO
    pedirCarta();               // ACA NO VA
} 


const valorCarta = (carta) => {
    // nos quedamos con el resumido de la 3ra parte
const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
    }
   
//const valor = valorCarta(pedirCarta());                                   //28 comentar
//console.log({valor});                                                     //28 comentar quitar


//...Eventos                                                                //29 creamos esto y vamos a html

btnPedir.addEventListener('click', () => {                                  //33
    const carta = pedirCarta();                                             //34
    
    puntosJugador = puntosJugador + valorCarta(carta);                      //37
    puntosHTML[0].innerText = puntosJugador;                                //40 FIN
    console.log(puntosJugador);                                             //38

});
 */


/*  ---------------------------------------- QUINTA PARTE CREAR CARTAS ------------------------------------ */

/* let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,                                                  
    puntosComputadora = 0;                                              

// Referencias html                                                     
const btnPedir = document.querySelector('#btnPedir');                   
const divCartasJugador = document.querySelector('#jugador-cartas');     //43 y voy a html
const puntosHTML = document.querySelectorAll('small')                   


const crearDeck = () => {
    for(let i=2; i <=10; i++) {
       for(let tipo of tipos) {  
        deck.push (i + tipo);
       }
    }

    for(let tipo of tipos) {
        for(let esp of especiales)
        deck.push (esp + tipo);
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();
//descomentamos
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


const valorCarta = (carta) => {
    // nos quedamos con el resumido de la 3ra parte
const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
    }


//...Eventos                                                                

btnPedir.addEventListener('click', () => {                                  
    const carta = pedirCarta();                                            
    
    puntosJugador = puntosJugador + valorCarta(carta);                      
    puntosHTML[0].innerText = puntosJugador;                                //40
    console.log(puntosJugador);                                             
                                                                            //41 ir a html

// tenemos que crear esto de manera dinamica                                //45
// <img class="carta" src="assets/cartas/2C.png" alt="">   
const imgCarta = document.createElement('img');                             //46
imgCarta.src = `assets/cartas/${carta}.png`;                                //46
imgCarta.classList.add('carta')                                             //46
divCartasJugador.append(imgCarta);                                          //47

if ( puntosJugador > 21) {                                                  //48 si los puntos del jugador son mas de 21
    console.warn('lo sinto mucho, perdiste');                               //48
    btnPedir.disabled = true;                                               //49 para bloquear el boton
} else if (puntosJugador === 21) {                                          //50 otra condicion
    console.warn('21 genial');                                              //50
    btnPedir.disabled = true;                                               //50 ese boton tambien se bloquearia. fin
}

}); */

/*  ---------------------------------------- SEXTA PARTE TURNO COMPUTADORA, mensaje y nuevo juego------------------------------------ */


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,                                                  
    puntosComputadora = 0;                                              

// Referencias html                                                     
const btnPedir = document.querySelector('#btnPedir');    
const btnDetener = document.querySelector('#btnDetener');                                  //70        
const btnNuevo = document.querySelector('#btnNuevo')                                       //77
const divCartasJugador = document.querySelector('#jugador-cartas'); 
const divCartasComputadora = document.querySelector('#computadora-cartas');               //65 creamos esto   

const puntosHTML = document.querySelectorAll('small')                   


const crearDeck = () => {
    for(let i=2; i <=10; i++) {
       for(let tipo of tipos) {  
        deck.push (i + tipo);
       }
    }

    for(let tipo of tipos) {
        for(let esp of especiales)
        deck.push (esp + tipo);
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();
//descomentamos
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


const valorCarta = (carta) => {
    // nos quedamos con el resumido de la 3ra parte
const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
    }

// turno computadora                                                             //60
const turnoComputadora = (puntosMinimos) => {
                                                                                //61 Copiamos y pegamos en el do info de abajo similar
    do {                                
    const carta = pedirCarta();                                            
    
    puntosComputadora = puntosComputadora + valorCarta(carta);                  //62 cambiamos aca pot puntoscomputadora
    puntosHTML[1].innerText = puntosComputadora;                                //62 cambiamos aca por 1 y vamos a html                                                                                                                 
    
    // tenemos que crear esto de manera dinamica                                
    // <img class="carta" src="assets/cartas/3C.png" alt="">                   //64 cambiamos aqui
    const imgCarta = document.createElement('img');                             
    imgCarta.src = `assets/cartas/${carta}.png`;                                
    imgCarta.classList.add('carta')                                             
    divCartasComputadora.append(imgCarta);                                      //66

    if(puntosMinimos > 21) {
        break;
    }

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));     //67

    setTimeout( () => {                                                         //75

    if( puntosComputadora === puntosMinimos) {                                  //74 inicio"nuevo juego y mensajes"
        alert('Nadie gana')                                                     //74
    } else if (puntosMinimos > 21) {                                            //74
        alert('Computadora gana')                                               //74
    } else if(puntosComputadora > 21) {                                         //74
        alert('Jugador gana');                                                  //74
    } else {
        alert('Computadora Gana')
    }                                                                     

}, 10 );                                                                        //76
}

//...Eventos                                                                

btnPedir.addEventListener('click', () => {                                  
    const carta = pedirCarta();                                            
    
    puntosJugador = puntosJugador + valorCarta(carta);                      
    puntosHTML[0].innerText = puntosJugador;                                
    //console.log(puntosJugador);                                             
                                                                        

// tenemos que crear esto de manera dinamica                                
// <img class="carta" src="assets/cartas/2C.png" alt="">   
const imgCarta = document.createElement('img');                             
imgCarta.src = `assets/cartas/${carta}.png`;                                
imgCarta.classList.add('carta')                                             
divCartasJugador.append(imgCarta);                                          

if ( puntosJugador > 21) {                                                  
    console.warn('lo sinto mucho, perdiste');                               
    btnPedir.disabled = true;  
    btnDetener.disabled = true;                                                             //73 fin"turno computadora"
    turnoComputadora(puntosJugador);                                                        //68

} else if (puntosJugador === 21) {                                          
    console.warn('21 genial');                                              
    btnPedir.disabled = true;
    btnDetener.disabled = true;                                                             //72
    turnoComputadora(puntosJugador);                                                        //69                    
}

});


btnDetener.addEventListener('click', () => {                                                //71
    btnPedir.disabled = true;                                                               //71
    btnDetener.disabled = true;                                                             //71

    turnoComputadora( puntosJugador );                                                      //71

});

btnNuevo.addEventListener('click', () => {                                                  //78
    
    console.clear();                                                                        //83 limpiamos la consola
    deck = [];                                                                              //83

    deck = crearDeck();                                                                     //79 se crea nuevo deck
    
    puntosJugador = 0;                                                                      //80
    puntosComputadora = 0;                                                                  //80

    puntosHTML[0].innerText = 0;                                                            //80
    puntosHTML[1].innerText = 0;                                                            //80

    divCartasComputadora.innerHTML = '';                                                    //81 al poner innerhtml borro todo
    divCartasJugador.innerHTML = '';                                                        //81

    btnPedir.disabled = false;                                                              //82 habilitamos estos btn
    btnDetener.disabled = false;                                                            //82

});