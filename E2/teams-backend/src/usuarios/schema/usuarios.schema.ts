import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Conversaciones } from "src/conversaciones/schema/conversaciones.schema";

export enum Type {
	ocupado = "ocupado",
	ausente = "ausente",
	disponible = "disponible",
}

@Schema()
export class Usuarios {
	@Prop({ required: true })
	nombre: string;

	@Prop({ required: true })
	contrasena: string;

	@Prop({ required: true })
	status: Type;

	@Prop({ required: true, default: null })
	imagen: string | null;

	@Prop({
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: "conversaciones" }],
		default: [],
	})
	conversaciones: Array<Conversaciones>;
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);
export const UsuariosModel = mongoose.model("usuarios", UsuariosSchema);
