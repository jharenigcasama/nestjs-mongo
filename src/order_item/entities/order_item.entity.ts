
import mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    name : {type : String, required : true},
    price : {type : Number, required : true}
});

export interface Item{
    name : string;
    price : Number;
}
