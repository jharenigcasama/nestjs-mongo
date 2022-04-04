import { Module } from '@nestjs/common';
import { PurchasedItemService } from './purchased_item.service';
import { PurchasedItemController } from './purchased_item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductItem } from 'src/product_item/entities/product_item.entity';
import { PurchasedItem, PurchaseItemSchema } from './entities/purchased_item.entity';
import { Customer, CustomerSchema } from 'src/customer/entities/customer.entity';
import { CustomerService } from 'src/customer/customer.service';

@Module({
  imports : [MongooseModule.forFeature([{name : PurchasedItem.name, schema : PurchaseItemSchema}, {name: Customer.name, schema : CustomerSchema} ])],
  controllers: [PurchasedItemController],
  providers: [PurchasedItemService, CustomerService]
})
export class PurchasedItemModule {}
