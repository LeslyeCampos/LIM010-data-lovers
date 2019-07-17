/* variables */
const pokedata = POKEMON.pokemon;
const dataCopiada = POKEMON.pokemon.slice(0, 150);
const claveIngresada = 'LABORATORIA';
const btnIngresar = document.getElementById('btn-ingresar');
const ordernarPor = document.getElementById('ordenar-por');
const filtrarTipo = document.getElementById('filtrar-por');
const filtrarDebilidad = document.getElementById('debilidad');
const filtrarHuevos = document.getElementById('huevos');

/* Login */
btnIngresar.addEventListener('click', () => {
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('password').value;
  if (usuario === claveIngresada && contraseña === claveIngresada) {
    document.getElementById('login').classList.add('hide');
    document.getElementById('vista1').classList.remove('hide');
    const contenedor = document.getElementById('contenedor');
    mostrarPokemones(POKEMON.pokemon);
  } else {
    document.getElementById('resultado').innerHTML = 'Usuario o  contraseña incorrecta';
    /* hacer foco a la contraseña para que se quede el puntero fijo*/
    document.getElementById('usuario').focus();
  }
});

/* Mostrar pokemones*/
const mostrarPokemones = (arrayPokemones) => {
  contenedor.innerHTML = '';
  for (let i = 0; i < arrayPokemones.length; i++) {
    const num = arrayPokemones[i].num;
    const id = arrayPokemones[i].id;
    const nombre = arrayPokemones[i].name;
    const imagen = arrayPokemones[i].img;
    contenedor.innerHTML += `
    <div class='poke' name='pokemon' id=${id}>
    <p> ${num} </p>
    <p> ${nombre} </p>
    <img src="${imagen}"/>
    </div>`;
  }
};

/* Modal */
contenedor.addEventListener('click', () => {
  /* Capturo el Id del pokemon que realizo evento en variable numero, se obtine el id del padre
  y le quito 1 para que coincida con el array */
  const poke = parseInt(event.target.parentElement.id - 1);
  /* Pongo condicional que si el atributo name  del padre de ese elemento es pokemon, 
  muestra modal e inserta datos del pokemon */
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    /* Mostrar modal*/
    document.getElementById('my-modal').classList.remove('hide');
    /* Insertar informacion de pokemon en Modal */
    document.getElementById('modal-info').innerHTML = `
<img class="imagenModal" src="${dataCopiada[poke].img}"/>
<p> Nombre:  ${dataCopiada[poke].name}</p>
 <p>Peso: ${dataCopiada[poke].weight}   </p> 
<p>Altura: ${dataCopiada[poke].height}</p>    
<p>Tipo: ${dataCopiada[poke].type}</p> `;
  }
});

/* Evento cerrar Modal */
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('hide');
});

/* Agregar evento para ordenar de a-z, z-a, pokedex, aparecen mas y aparecen menos*/
ordernarPor.addEventListener('change', () => {
  const condicion = ordernarPor.value;
  const pokemonesOrdenados = ordenar(condicion, pokedata);
  mostrarPokemones(pokemonesOrdenados);
});

/* Agregar evento para filtrar tipo*/
filtrarTipo.addEventListener('change', () => {
  const filtroSeleccionado = filtrarTipo.value;
  const pokemonesFiltrados = filtrar(filtroSeleccionado, pokedata);
  mostrarPokemones(pokemonesFiltrados);
});

/* Agregar evento para filtrar debilidad */
filtrarDebilidad.addEventListener('change', () => {
  const filtroDebilidad = filtrarDebilidad.value;
  const pokemonesDebilidad = debilidad(filtroDebilidad, pokedata);
  mostrarPokemones(pokemonesDebilidad);
});

/* Agregar evento para filtrar huevos*/
filtrarHuevos.addEventListener('change', () => {
  const filtroHuevos = filtrarHuevos.value;
  const pokemonesHuevos = huevos(filtroHuevos, pokedata);
  mostrarPokemones(pokemonesHuevos);
  /* Agregar porcentajes*/
  porcentaje.classList.remove('hide');
  porcentaje.innerHTML = `Pokemones que nacen de huevos de  ${filtrarHuevos.value} corresponden al ${((pokemonesHuevos.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
  console.log(filtrarHuevos);
});

/* Agregar evento para pokedex*/
btnPokedex.addEventListener('click', () => {
  ordernarPor.value = '';
  filtrarTipo.value = '';
  filtrarDebilidad.value = '';
  filtrarHuevos.value = '';
  porcentaje.innerHTML = '';
  const filtroPokedex = ordenar('pokedex');
  mostrarPokemones(filtroPokedex);
});

/* Agregar evento para salir*/
btnSalir.addEventListener('click', () => {
  document.getElementById('vista1').classList.add('hide');
  document.getElementById('login').classList.remove('hide');
});