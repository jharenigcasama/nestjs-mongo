import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ProductItemDocument = ProductItem & Document;

@Schema()
export class ProductItem {
    @Prop({required : true, type : String })
    name : string;

    @Prop({required : true, type : Number})
    price : Number;

}

export const ProductSchema = SchemaFactory.createForClass(ProductItem);
