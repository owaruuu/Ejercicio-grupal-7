const form = document.getElementById('form');
const nombre = document.querySelector('#name-input');
const correo = document.querySelector('#correo-input');
const mensaje =  document.querySelector('#mensaje-input');

form.addEventListener('submit', validar);

nombre.addEventListener('input', (event) => cleanClass(event, 'is-invalid'));
correo.addEventListener('input', (event) => cleanClass(event, 'is-invalid'));
mensaje.addEventListener('input', (event) => cleanClass(event, 'is-invalid'));

nombre.addEventListener('change', (event) => cleanClass(event, 'is-invalid'));
correo.addEventListener('change', (event) => cleanClass(event, 'is-invalid'));
mensaje.addEventListener('change', (event) => cleanClass(event, 'is-invalid'));

function validar(event){
    let contador = 0;
    let mensajeAlerta = "";

    if(nombre.value == ""){
        mensajeAlerta += "Debe ingresar un nombre.\n";
        nombre.classList.add('is-invalid');
        contador++;
    };
    
    if(correo.value == ""){
        mensajeAlerta += "Debe ingresar un correo.\n";
        correo.classList.add('is-invalid');
        contador++;
    }

    if(mensaje.value == ""){
        mensajeAlerta += "Debe ingresar un mensaje.\n";
        mensaje.classList.add('is-invalid');
        contador++;
    }

    if(contador > 0){
        if(contador === 1){
            alert(mensajeAlerta);
            event.preventDefault();
        }else{
            alert(mensajeAlerta);
            event.preventDefault();
        }    
    }
}

function cleanClass(event, clase){
    event.target.classList.remove(clase);
}