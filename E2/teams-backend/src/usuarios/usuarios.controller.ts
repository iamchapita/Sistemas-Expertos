import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
	Res,
} from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { Usuarios } from "./schema/usuarios.schema";
import { CreateUsuariosDto, UpdateUsuariosDto } from "./dto/usuarios.dto";

@Controller("usuarios")
export class UsuariosController {
	constructor(private usuariosService: UsuariosService) {}

	@Post("/")
	createUsuario(
		@Body() crearUsuarioDto: CreateUsuariosDto
	): Promise<Usuarios> {
		return this.usuariosService.createUsuario(crearUsuarioDto);
	}

	@Post("/login")
	async login(@Res() res, @Body() crearUsuarioDto: CreateUsuariosDto) {
		const usuario = await this.usuariosService.login(
			crearUsuarioDto.nombre,
			crearUsuarioDto.contrasena
		);

		return usuario !== null
			? res.status(200).json({
					exito: true,
					mensaje: "Inicio de Sesión Exitoso",
					usuario: { nombre: usuario.nombre, status: usuario.status },
			  })
			: res
					.status(400)
					.json({ exito: false, mensaje: "Credenciales inválidas" });
	}

	@Get("/")
	getUsuarios(): Promise<Array<Usuarios>> {
		return this.usuariosService.getUsuarios();
	}

	@Get("/:id")
	async getUsuario(@Res() res, @Param("id") id: string): Promise<Usuarios> {
		const user = await this.usuariosService.getUsuario(id);

		return user !== null
			? res.status(200).json(user)
			: res.status(400).json({ mensaje: "Usuario no encontrado" });
	}

	@Get("/:id/conversaciones")
	async getConversaciones(
		@Res() res,
		@Param("id") id: string
	): Promise<Usuarios> {
		const user = await this.usuariosService.getUsuario(id);
		const users = await this.usuariosService.getUsuarios();

		if (user) {
			let conversacionesUsuario = user.conversaciones.map(
				(conversacion) => {
					if (conversacion.tipo === "individual") {
						const destinatario = users.find(
							(user: any) =>
								(user._id = conversacion.idDestinatario)
						);

						// console.log(destinatario);
						return {
							...conversacion,
							nombreDestinatario: destinatario.nombre,
							imagenDestinatario: destinatario.imagen,
						};
					} else {
						// const grupo = grupos.find(
						// 	(grupo) => grupo.id === conversacion.idGrupo
						// );
						// return {
						// 	...conversacion,
						// 	nombreDestinatario: grupo.nombreGrupo,
						// 	imagenDestinatario: null,
						// };
					}
				}
			);

			return res.status(200).json(conversacionesUsuario);
		}

		return res.status(400).json({ mensaje: "Usuario no encontrado" });
	}
}
