import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Usuarios } from "src/usuarios/schema/usuarios.schema";
import { Mensajes } from "src/mensajes/schema/mensajes.schema";

import mongoose from "mongoose";

@Schema()
export class Conversaciones {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "usuarios",
		required: true,
	})
	emisor: Usuarios;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "usuarios",
		required: true,
	})
	receptor: Usuarios;

	@Prop({ default: "" })
	ultimoMensaje: string;

	@Prop({ type: Date, default: Date.now })
	fechaConversacion: Date;

	@Prop({
		default: [],
	})
	mensajes: Array<Mensajes>;
}

export const ConversacionesSchema =
	SchemaFactory.createForClass(Conversaciones);
export const ConversacionesModel = mongoose.model(
	"conversaciones",
	ConversacionesSchema
);
