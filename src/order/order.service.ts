import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import {  Model } from 'mongoose'; 

@Injectable()
export class OrderService {
  constructor(@InjectModel('Orders') private readonly ordersModel : Model<Order> ){}
  
  private orders : Order[] = [];

  async create(createOrderDto: CreateOrderDto) {
    const order = new this.ordersModel(createOrderDto);
    const create_order = await order.save();
    
    return create_order;
  }

  findAll() {
    return this.ordersModel.find();
  }

  findOne(id: number) {
    
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
