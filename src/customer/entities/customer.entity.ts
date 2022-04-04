import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { PurchasedItem } from 'src/purchased_item/entities/purchased_item.entity';
import { User } from 'src/user/user.model';

export type CustomerDocument = Customer & Document;

@Schema({ timestamps : true })
export class Customer {
    @Prop({ type : [{type : mongoose.Schema.Types.ObjectId, ref: 'PurchasedItem' }] })
    purchase_id : PurchasedItem[];

    @Prop({ type : mongoose.Schema.Types.ObjectId, ref : 'User' })
    user_id : User
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
