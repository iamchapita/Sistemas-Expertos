import { Injectable } from "@nestjs/common";
import { Conversaciones } from "./schema/conversaciones.schema";
import { Model } from "mongoose";
import {
	CreateConversacionesDto,
	UpdateConversacionesDto,
} from "./dto/conversaciones.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Mensajes } from "src/mensajes/schema/mensajes.schema";

@Injectable()
export class ConversacionesService {
	constructor(
		@InjectModel("conversaciones")
		private readonly conversacionesModel: Model<Conversaciones>
	) {}

	async getMensajesDeConversacion(id: string): Promise<Conversaciones> {
		return this.conversacionesModel.findById(id);
	}
}
