import { Module } from '@nestjs/common';
import { FirebaseModule } from './firebase/firebase.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true }), FirebaseModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
