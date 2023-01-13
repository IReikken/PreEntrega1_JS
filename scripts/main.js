let num_estudiantes = 0
let num_materias = 0
let calificaciones = []
let materias = []
let nombres = []
let estidiantes= []
let datos_estudiante = {}



    // Función para registrar cantidad
function cantidad(objeto){
    let num = 0 
    num = parseInt(prompt("Ingrese la candidad de "+objeto))
    while (num<=0){
        num = parseInt(prompt("Debe ingresar una cantidad mayor a 0"))
    }
    return num
}
    // Funcion para guardar nombres en arreglo
function registro(cantidad,texto){
    let arreglo = []
    let orden = 0    
    for(let i=0;i<cantidad;i++){
        orden = i+1
        arreglo[i]=prompt(texto+ orden)
    }
    return arreglo;
}

    //Objeto de estudiantes
function estudiante(nom){
    this.nombre = nom
}


//Almacenamiento de estudiantes
num_estudiantes = cantidad("estudiantes")
nombres = registro(num_estudiantes,"Ingrese el nombre del estudiante ")

//Almacenamiento de materias
num_materias = cantidad("materias")
materias = registro(num_materias,"Ingrese el nombre de la materia ")


let dato = []
let calif = 0
let objeto = {} 

//Asginación de calificaciones a estudiantes

for(let i=0;i<num_estudiantes;i++){
    objeto = new estudiante(nombres[i])
    for(let j=0;j<num_materias;j++){
        calif =  parseInt(prompt("Ingrese la calificación (0-10) de "+nombres[i]+" en la materia "+materias[j]))
        while ((calif<0 || calif>10)){
            calif = parseInt(prompt("Debe ingresar una cantidad entre 1 y 10"))
        }
        Object.defineProperty(objeto,materias[j],{
            value: calif,
            writable: true
        })
    }
    dato[i] = objeto 

    }
console.log(dato)

console.log(dato[0].nombre)

// Cálculo de promedios
let promedios = []
let promedio = 0
for(let i=0; i<dato.length; i++){
    promedio = 0
    for(let j=0; j<materias.length; j++){
        promedio += dato[i][materias[j]]
        }
    promedios[i] = promedio / num_materias
    Object.defineProperty(dato[i],"promedio",{
        value: promedios[i],
        writable: true
    })
}

posiciones = {}
for(let i=0; i<nombres.length;i++){
    Object.defineProperty(posiciones,"promedio",{
        value: promedios[i],
        writable: true
    })
    Object.defineProperty(posiciones,"nombre",{
        value: nombres[i],
        writable: true
    })
}


posiciones.sort((a,b) => b.promedio-a.promedio)



console.log(posiciones)