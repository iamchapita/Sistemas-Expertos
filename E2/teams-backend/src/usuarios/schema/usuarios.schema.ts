import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Conversaciones } from "src/conversaciones/schema/conversaciones.schema";
import { Grupos } from "src/grupos/schema/grupos.schema";

export enum Type {
	ocupado = "ocupado",
	ausente = "ausente",
	disponible = "disponible",
}

export enum ConversacionType {
	grupal = "grupal",
	individual = "individual",
}

export type ResumenConversaciones = {
	idConversacion: Conversaciones;
	idDestinatario: Usuarios;
	idGrupo: Grupos | null;
	tipo: ConversacionType;
	ultimoMensaje: string;
	horaUltimoMensaje: Date;
	nombreDestinatario: string;
	imagenDestinatario: string;
};

@Schema()
export class Usuarios {
	@Prop({ required: true })
	nombre: string;

	@Prop({ required: true })
	contrasena: string;

	@Prop({ required: true })
	status: Type;

	@Prop({ default: null })
	imagen: string | null;

	@Prop({
		default: [],
	})
	conversaciones: Array<ResumenConversaciones>;
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);
export const UsuariosModel = mongoose.model("usuarios", UsuariosSchema);
