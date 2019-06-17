
export class FileItem {

    public archivo: File;
    public nombreArchivo: string;
    public Url: string;
    public estaSubiendo: boolean;
    public progreso: number;

    constructor(archivo: File) {
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.estaSubiendo = false;
        this.progreso = 0;
    }



}
