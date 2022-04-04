import { Module } from '@nestjs/common';
import { ProductItemService } from './product_item.service';
import { ProductItemController } from './product_item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductItem, ProductSchema } from './entities/product_item.entity';

@Module({
  imports : [MongooseModule.forFeature([{name : ProductItem.name, schema : ProductSchema}])],
  controllers: [ProductItemController],
  providers: [ProductItemService]
})
export class ProductItemModule {}
