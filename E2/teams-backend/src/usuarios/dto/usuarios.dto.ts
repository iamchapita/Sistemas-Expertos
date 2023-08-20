import { Conversaciones } from "src/conversaciones/schema/conversaciones.schema";
import { Type } from "../schema/usuarios.schema";

export class CreateUsuariosDto {
	readonly _id: string;
	readonly nombre: string;
	readonly contrasena: string;
	readonly status: Type;
	readonly imagen: string | null;
}

export class UpdateUsuariosDto {
	readonly _id: string;
	readonly nombre: string;
	readonly contrasena: string;
	readonly status: Type;
	readonly imagen: string | null;
}
