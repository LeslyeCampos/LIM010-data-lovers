<<<<<<< HEAD
const filterOrder = document.getElementById('filtro-orden');
const filterType = document.getElementById('filtro-tipo');
// funcion que espera que se seleccione algun filtro
filterOrder.addEventListener('change', () => {
  ordenar();
});
filterType.addEventListener('change', () => {
  ordenar();
});

// funcion ordenar
const ordenar = () => {
  const pokemonesFiltrados = POKEMON.pokemon;
  mostrarPokemones(pokemonesFiltrados);
};
=======
/* Asignar contenedor a variable */
>>>>>>> 6ed3aaf11f15378d454353e3d2af9a1ffb8fa4c9
const contenedor = document.getElementById('contenedor');

/* FUCNION DE MOSTRAR POKEMONES */
const mostrarPokemones = (data) => {
  for (let i = 0; i < data.length; i++) {
    const num = data[i].num;
    const id = data[i].id;
    const nombre = data[i].name;
    const imagen = data[i].img;

    contenedor.innerHTML += `<div class='poke' name='pokemon' id=${id}>
    <p> ${num} </p>
    <p> ${nombre} </p>
    <img src="${imagen}"/>
    </div>`;
  }
<<<<<<< HEAD
};

=======

  // crear array con pokemones que han sido mostrados con variable pokemon dentro del contenedor
  pokemon = document.getElementsByName('pokemon');


  /* EVENTO PARA SABER CUAL SE HIZO click */
  for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].getAttribute('name') === 'pokemon') {
      /* si hace click */
      pokemon[i].addEventListener('click', () => {
        console.log(event);
        // se obtine el id del padre de la imagen
        // se quita 1 para que coincida con array
        const numero = parseInt(event.target.parentElement.id) - 1 ;
        // Mostrar modal
        document.getElementById('my-modal').classList.remove('hide');
        // Insertar datos en Modal
        document.getElementById('modal-info').innerHTML = `
        <img class="imagenModal" src="${POKEMON.pokemon[numero].img}"/>
        <p> ${POKEMON.pokemon[numero].num}  ${POKEMON.pokemon[numero].name}</p>
        <p>Peso: ${POKEMON.pokemon[numero].weight}   </p> 
        <p>Altura: ${POKEMON.pokemon[numero].height}</p>    
        <p>Tipo: ${POKEMON.pokemon[numero].type}</p>
        `;
      });
    };
  }
};

/* cerrar Modal */
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('hide');
});

>>>>>>> 6ed3aaf11f15378d454353e3d2af9a1ffb8fa4c9
const atrapados = document.getElementById('contador');
let contAtrapados = 0;
let contNoAtrapados = 0;
for (let i = 0; i < POKEMON.pokemon.length; i++) {
  if (POKEMON.pokemon[i].multipliers === null) {
    contNoAtrapados++;
  } else {
    contAtrapados = 148 - contNoAtrapados;
  }

  atrapados.innerHTML = `<div>
     ${contAtrapados}    ${contNoAtrapados}
     </div>`;
<<<<<<< HEAD
};
=======
};

>>>>>>> 6ed3aaf11f15378d454353e3d2af9a1ffb8fa4c9
