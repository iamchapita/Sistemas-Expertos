import { Module, forwardRef } from "@nestjs/common";
import { GruposService } from "./grupos.service";
import { GruposController } from "./grupos.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { GruposSchema } from "./schema/grupos.schema";
import { UsuariosModule } from "src/usuarios/usuarios.module";

@Module({
	imports: [
		MongooseModule.forFeature([{ name: "grupos", schema: GruposSchema }]),
		forwardRef(() => UsuariosModule),
	],
	providers: [GruposService],
	controllers: [GruposController],
})
export class GruposModule {}
