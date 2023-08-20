import { Usuarios } from "src/usuarios/schema/usuarios.schema";

export class CreateMensajesDto {
	readonly _id: string;
	readonly emisor: Usuarios;
	readonly receptor: Usuarios;
	readonly mensaje: string;
}

export class UpdateMensajesDto {
	readonly _id: string;
	readonly emisor: Usuarios;
	readonly receptor: Usuarios;
	readonly mensaje: string;
}
