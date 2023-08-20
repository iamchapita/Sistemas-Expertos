import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Usuarios } from "src/usuarios/schema/usuarios.schema";
import { Mensajes } from "src/mensajes/schema/mensajes.schema";

@Schema()
export class Grupos {
	@Prop()
	nombreGrupo: string;

	@Prop({
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }],
		default: [],
	})
	miembros: Array<Usuarios>;

	@Prop({
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: "mensajes" }],
		default: [],
	})
	mensajes: Array<Mensajes>;
}

const GruposSchema = SchemaFactory.createForClass(Grupos);
const GruposModel = mongoose.model("Gruposs", GruposSchema);

export { GruposSchema, GruposModel };
