import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/service/user/user.service';
import { JwtAuthStrategy } from './utils/jwt-auth-strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Users', schema : UserSchema}]), JwtModule.register({
    secret : 'mysecretnestmongo',
    signOptions : {expiresIn : '60s'},
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthStrategy, UserService],
  
})
export class AuthModule {}
