import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
import { User } from 'src/user/user.model';
import { hashPassword } from 'src/user/utils/bcrypt';
@Injectable()
export class UserService {
    constructor(@InjectModel('Users') private readonly userModel : Model<User> ){}

      private users : User[] = [];

//    async insertNewUser(fname : string, lname : string, address : any , age : number, contact : any){
    async insertNewUser(createUser : CreateUserDto){
        const password = hashPassword(createUser.password);

        const newuser = new this.userModel({...createUser, password});
        //     fname : fname,
        //     lname : lname,
        //     address : address,
        //     age : age,
        //     contact : contact
        // });
        const res = await newuser.save();

        return res;

    }

 

    findById(id: string){

        try {
            return this.userModel.findById({_id : id});     
        } catch (error) {
            return error;
        }
    
    }

    findUserByUsername(username : string){
        return this.userModel.findOne({username});
    }

    async getUsers(){
        try {
            const users = await this.userModel.find();
            return users;     
        } catch (error) {
         return error;
        }
       
    }

    async removeUser(id : string){
        try {
            const userToRemove = this.userModel.findById(id);
            const user = this.userModel.deleteOne({ _id : (await userToRemove)._id});
            return user;     
        } catch (error) {
            return new HttpException('Not found',  HttpStatus.BAD_REQUEST);    
        }
       
    }

  async updateUser(id:string, updateUserDto : UpdateUserDto){
       
        var query = {'_id': id};
        
        const update =  await this.userModel.findByIdAndUpdate(query, updateUserDto, {upsert: true});
        if(update){
            return new HttpException('User updated', HttpStatus.CREATED);
        }
      
    
    
    // FIND ONE AND UPDATE 
    //  const user = await this.userModel.findByIdAndUpdate(
    //     query,
    //     updateUserDto,
    //     {new : true})
    //     .exec()
    //     .then((response) => {
    //          return response;
    //     });
     
        // return user;
    }

}
