import { Module } from "@nestjs/common";
import { UsuariosController } from "./usuarios.controller";
import { UsuariosService } from "./usuarios.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsuariosSchema } from "./schema/usuarios.schema";

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: "usuarios", schema: UsuariosSchema },
		]),
	],
	controllers: [UsuariosController],
	providers: [UsuariosService],
	exports: [UsuariosService, MongooseModule],
})
export class UsuariosModule {}
