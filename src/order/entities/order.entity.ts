import mongoose from "mongoose";

export const OrderSchema = new mongoose.Schema({
   itemid :{
       type : [Array]
   },
   customer : {
    type : String,
    required : true
    },
    quantity : {
        type : Number,
        required : true,
        default : 0
    }, 
   createdAt : {
       type: Date,
       default : Date.now
   },
  
});




export interface Order{
    item : [Array<String>];
    customer : string;
    quantity : number;
    createdAt : Date;
    
}