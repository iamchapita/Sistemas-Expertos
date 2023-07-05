export interface Users {
	id: number;
	nombre: string;
	genero: string;
	verificado: boolean;
	edad: number;
	imagenPerfil: string;
	imagenPortada: string;
	ocupacion: string;
	ciudad: string;
	intereses: string[];
	matches: number[];
	likes: number[];
	generoInteres: string[];
}
