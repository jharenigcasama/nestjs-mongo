import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ProductItem } from 'src/product_item/entities/product_item.entity';

export type PurchasedItemDocument = PurchasedItem & Document;

@Schema({ timestamps : true })
export class PurchasedItem {
    @Prop({ type : mongoose.Schema.Types.ObjectId, ref: 'ProductItem'})
    item_id : ProductItem;

    @Prop({required : true, type : Number})
    quantity : Number
}


export const PurchaseItemSchema = SchemaFactory.createForClass(PurchasedItem);