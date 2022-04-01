import { Module } from '@nestjs/common';
import { OrderItemService } from './order_item.service';
import { OrderItemController } from './order_item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './entities/order_item.entity';

@Module({
  imports : [MongooseModule.forFeature([{name : 'Item', schema : ItemSchema}])],
  controllers: [OrderItemController],
  providers: [OrderItemService]
})
export class OrderItemModule {}
