import { Usuarios } from "src/usuarios/schema/usuarios.schema";

export class CreateConversacionesDto {
	readonly _id: string;
	readonly emisor: Usuarios;
	readonly receptor: Usuarios;
	readonly ultimoMensaje: string;
}

export class UpdateConversacionesDto {
	readonly _id: string;
	readonly emisor: Usuarios;
	readonly receptor: Usuarios;
	readonly ultimoMensaje: string;
}
