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
	getUsuario(@Param("id") id: string): Promise<Usuarios> {
		return this.usuariosService.getUsuario(id);
	}
}
