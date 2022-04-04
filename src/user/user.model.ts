import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    address : {
        main : {
            type : String,
        },
        work : {
            type : String,
        
        }
        
    },
    age : {
        type : Number,
        required : true
    },
    contact: {
       mobile: {type: String},
    telephone : {type : String},
    },
    username : {type : String, required : true},
    password : {type : String, required : true}


});

export interface User{
    fname : string;
    lname : string;
    address : string;
    age : number;
    contact : string;
    username : string;
    password : string;

}