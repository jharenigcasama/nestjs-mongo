import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { Item } from './entities/order_item.entity';
import { Model } from 'mongoose';
import { throwStatement } from '@babel/types';

@Injectable()
export class OrderItemService {
  constructor(@InjectModel('Item') private readonly orderItem : Model<Item>){}

  async create(createOrderItemDto: CreateOrderItemDto) {
      const item = new this.orderItem(createOrderItemDto);
      const savedItem = await item.save();  
      return savedItem;
  }

  findAll() {
    return this.orderItem.find();  
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return `This action updates a #${id} orderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
