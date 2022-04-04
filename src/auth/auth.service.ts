import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user/user.service';
import { comparePassword } from 'src/user/utils/bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService : UserService, private jwtService : JwtService){}

     async login(user : any){
        const found_user = await this.userService.findUserByUsername(user.username);
        if(found_user){
          const isMatch = comparePassword(user.password, found_user.password);
          if(isMatch){
            // var tmp_arr = found_user;
            const {password : password, ...rest} = found_user.toObject();
            
          
            const payload = {name : found_user.username, sub : found_user._id};
            console.log(rest);
            return {
              access_token : this.jwtService.sign(payload),
              user : rest

            };
          
          }else{
            return new HttpException('Password not match.', HttpStatus.BAD_REQUEST);
          }
         
        }else{
          return new HttpException('User not found.', HttpStatus.BAD_REQUEST);
        }

     } 

  

  
}
