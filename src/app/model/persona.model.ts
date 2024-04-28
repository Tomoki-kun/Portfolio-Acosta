export class persona{
    // El ? significa que no es necesario el dato
    id?:  number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, apellido: string, descripcion: string, img: string)
    {
        this.nombre = nombre;
        this.apellido =apellido;
        this.descripcion = descripcion;
        this.img = img;
    }
}