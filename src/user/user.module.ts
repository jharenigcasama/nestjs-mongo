import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { UserSchema } from './user.model';

@Module({
  imports : [MongooseModule.forFeature([{name: 'Users', schema : UserSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
