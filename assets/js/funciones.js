$(document).ready(function () {
    $('#miTabla').DataTable({
        responsive: true,
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-CL.json',
        }, ajax: 'assets/data/data.json',
        columns: [
            { data: 'id' },
            { data: 'first_name' },
            { data: 'email' },
            { data: 'city' },
            { data: 'enterprise' },
        ],
    });
});

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
};

function cleanClass(event, clase){
    event.target.classList.remove(clase);
};

function mostrarMensaje() {
    alert("Te esperamos en la sección contacto");
};



function agregar(id) {
    
    alert("Agregaste el artículo: " + document.getElementById(id).textContent);
    carro(document.getElementById(id).textContent);
}

var msn = "El carro de compra cpntiene\n";

function carro(articulo) {
    msn += articulo + "\n";
}
