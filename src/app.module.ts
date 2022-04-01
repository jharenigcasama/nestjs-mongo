import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-mongodb')],
  controllers: [],
  providers: [],
})
export class AppModule {}
