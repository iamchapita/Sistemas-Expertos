import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Grupos } from "./schema/grupos.schema";
import { Model } from "mongoose";
import { Mensajes } from "src/mensajes/schema/mensajes.schema";

@Injectable()
export class GruposService {
	constructor(
		@InjectModel("grupos")
		private readonly gruposModel: Model<Grupos>
	) {}

	async getMensajesByGroupId(id: string): Promise<Array<Mensajes>> {
		return (await this.gruposModel.findById(id)).mensajes;
	}

	async getMiembrosByGroupId(id: string) {
		return (await this.gruposModel.findById(id)).miembros;
	}
}
