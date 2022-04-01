import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PublicationModule } from './publication/publication.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order_item/order_item.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-mongodb'), PublicationModule, OrderModule, OrderItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
