import { Controller, Get, Param } from "@nestjs/common";
import { ConversacionesService } from "./conversaciones.service";

@Controller("conversaciones")
export class ConversacionesController {
	constructor(private conversacionService: ConversacionesService) {}

	@Get("/:id/mensajes")
	async getById(@Param("id") id: string) {
		return (await this.conversacionService.getMensajesDeConversacion(id))
			.mensajes;
	}
}
