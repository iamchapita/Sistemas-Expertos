import { Controller } from "@nestjs/common";
import { Get, Post, Put, Delete, Body, Param, Res } from "@nestjs/common";
import { GruposService } from "./grupos.service";
import { UsuariosService } from "src/usuarios/usuarios.service";

@Controller("grupos")
export class GruposController {
	constructor(
		private gruposService: GruposService,
		private usuarioService: UsuariosService
	) {}

	@Get("/:id/mensajes")
	getMensajesPorGrupo(@Param("id") id: string) {
		return this.gruposService.getMensajesByGroupId(id);
	}

	@Get("/:id/miembros")
	async getMiembrosPorGrupo(@Res() res, @Param("id") id: string) {
		const ids = await this.gruposService.getMiembrosByGroupId(id);
		const users = await this.usuarioService.getUsuarios();
		let miembros = [];

		if (ids.length > 0) {
			ids.map((id) => {
				users.map((user: any) => {
					user._id = id;
					miembros.push({
						id: id,
						nombre: user.nombre,
						imagen: user.imagen,
					});
				});
			});
			return res.status(200).json(miembros);
		}

		return res.status(400).json({ message: "No hay miembros." });
	}
}
