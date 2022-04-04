import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { PurchasedItem } from "src/purchased_item/entities/purchased_item.entity";
import { User } from "src/user/user.model";

export type OrderDocument = Order & Document;

@Schema()
export class Order{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref : 'PurchasedItem'})
    item_purchased: PurchasedItem
  
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'User' })
    customer : User;
  
    @Prop({ required: true })
    createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);