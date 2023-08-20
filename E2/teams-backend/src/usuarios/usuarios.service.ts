import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Usuarios } from "./schema/usuarios.schema";
import { Model } from "mongoose";
import { CreateUsuariosDto, UpdateUsuariosDto } from "./dto/usuarios.dto";

@Injectable()
export class UsuariosService {
	constructor(
		@InjectModel("usuarios")
		private readonly usuariosModel: Model<Usuarios>
	) {}

	async getUsuarios(): Promise<Array<Usuarios>> {
		return this.usuariosModel.find();
	}

	async getUsuario(id: string): Promise<Usuarios> {
		return this.usuariosModel.findById(id);
	}

	async createUsuario(
		createUsuariosDto: CreateUsuariosDto
	): Promise<Usuarios> {
		const user = new this.usuariosModel(createUsuariosDto);
		await user.save();
		return user;
	}

	async login(usuario: string, contrasena: string): Promise<Usuarios | null> {
		const encontradoObj = await this.usuariosModel.findOne({
			nombre: usuario,
		});
		if (!encontradoObj) {
			return null;
		}
		if (encontradoObj.contrasena != contrasena) {
			return null;
		}
		return encontradoObj;
	}
}
