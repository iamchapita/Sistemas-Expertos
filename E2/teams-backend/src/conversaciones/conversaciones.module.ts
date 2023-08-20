import { Module } from "@nestjs/common";
import { ConversacionesController } from "./conversaciones.controller";
import { ConversacionesService } from "./conversaciones.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConversacionesSchema } from "./schema/conversaciones.schema";

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: "conversaciones", schema: ConversacionesSchema },
		]),
	],
	controllers: [ConversacionesController],
	providers: [ConversacionesService],
})
export class ConversacionesModule {}
