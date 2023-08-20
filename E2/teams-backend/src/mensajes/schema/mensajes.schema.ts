import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Usuarios } from "src/usuarios/schema/usuarios.schema";
import * as mongoose from "mongoose";

@Schema()
export class Mensajes {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "usuarios",
		required: true,
	})
	emisor: Usuarios;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "usuarios"
	})
	receptor: Usuarios;

	@Prop({ required: true })
	mansaje: string;

	@Prop({ type: Date, default: Date.now })
	hora: Date;
}

export const MensajesSchema = SchemaFactory.createForClass(Mensajes);
export const MensajesModel = mongoose.model("mensajes", MensajesSchema);
