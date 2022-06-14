
class Pelicula{
    constructor(id, nombre, categoria, descripcion,imagen,publicado){
        this.id=id
        this.nombre=nombre
        this.categoria=categoria
        this.descripcion=descripcion
        this.imagen=imagen
        this.publicado=publicado
    }
}

let peliculas=JSON.parse(localStorage.getItem('peliculas')) || []
let tableBody=document.querySelector('#table_body')



function agregarPelicula(e) {
    e.preventDefault()
    
    let id= new Date().getTime();
    let nombre=document.getElementById('nombre').value
    let cat=document.getElementById('cat').value
    let desc=document.getElementById('desc').value
    let imagen=document.getElementById('imagen').value
    let public=document.getElementById('public').value

peliculas.push(new Pelicula(id,nombre,cat,desc,imagen,public))
localStorage.setItem('peliculas',JSON.stringify(peliculas));
document.getElementById('formulario').reset ()
cargarPelicula();
}

const cargarPelicula=()=>{
    tableBody.innerHTML='';
    peliculas.map(function (pelicula,index) {
        let tr=document.createElement('tr')
        let celda=`
        <th scope="row">${index + 1}</th> 
        <td>${pelicula.nombre}</td>
        <td>${pelicula.categoria}</td>
        <td>${pelicula.descripcion}</td>        
        <td>${pelicula.publicado}</td>
        <td><button class="btn btn-warning btn-sm" onclick="editModal(${index})"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button class="btn btn-danger btn-sm" onclick="borrarusuario(${index})"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        </td>        
        `

        tr.innerHTML=celda
        table_body.appendChild(tr)       

    })
}


document.getElementById('formulario').addEventListener('submit',agregarPelicula);

cargarPelicula();