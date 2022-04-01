import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}
    @Post('')
    newUser(@Body() createUser: CreateUserDto, @Body('fname') fname: string,@Body('lname') lname: string,@Body('address') address: any,@Body('age') age: number, @Body('contact') contact : any ){
       console.log(fname);
       console.log(lname);
       console.log(address);
       console.log(age);
       console.log(contact);

        return this.userService.insertNewUser(fname, lname, address, age, contact); 
    }

    @Get('')
    getUser(){
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserByID(@Param('id') id : string){
        return this.userService.findById(id);
    }

    @Delete(':id')
    removeUser(@Param('id') id : string){
        return this.userService.removeUser(id);
    }

    @Put(':id')
    updateUser(@Param('id') id : string, @Body() updateUserDto : UpdateUserDto){
        // console.log(updateUserDto);
      return this.userService.updateUser(id, updateUserDto);

    }
}
