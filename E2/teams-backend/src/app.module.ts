import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConversacionesModule } from './conversaciones/conversaciones.module';
import { GruposModule } from './grupos/grupos.module';
import { MensajesModule } from './mensajes/mensajes.module';

const url: string = 'mongodb://0.0.0.0:27017/teams';

@Module({
  imports: [
    MongooseModule.forRoot(url),
    UsuariosModule,
    ConversacionesModule,
    GruposModule,
    MensajesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
