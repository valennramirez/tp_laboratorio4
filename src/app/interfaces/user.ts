export interface User {
    gmail: string, 
    usuario:string, 
    nombre: string, 
    apellido: string, 
    contraseña:string,
    id: number, 
    cumpleaños: Date,
    genero: string
}

export interface Pelicula{
    titulo: string, 
    ratings: string, 
    fecha: Date, 
    sinopsis: string, 
    director: string, 
    duracion: string, 
    reparto: string, 
    idiomaOriginal: string
}