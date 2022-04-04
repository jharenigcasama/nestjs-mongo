import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PublicationModule } from './publication/publication.module';
import { OrderModule } from './order/order.module';

import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { PurchasedItemModule } from './purchased_item/purchased_item.module';
import { ProductItemModule } from './product_item/product_item.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-mongodb'), PublicationModule, OrderModule,  PassportModule, AuthModule, PurchasedItemModule, ProductItemModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
