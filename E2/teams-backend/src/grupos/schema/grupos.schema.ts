import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Usuarios } from "src/usuarios/schema/usuarios.schema";
import { Mensajes } from "src/mensajes/schema/mensajes.schema";

@Schema()
export class Grupos {
	@Prop()
	nombreGrupo: string;

	@Prop({ default: [] })
	miembros: Array<Usuarios>;

	@Prop({
		default: [],
	})
	mensajes: Array<Mensajes>;
}

const GruposSchema = SchemaFactory.createForClass(Grupos);
const GruposModel = mongoose.model("grupos", GruposSchema);

export { GruposSchema, GruposModel };
