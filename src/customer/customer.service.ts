import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './entities/customer.entity';
import { Model } from 'mongoose';
import { PurchasedItem } from 'src/purchased_item/entities/purchased_item.entity';
 
@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer.name) private readonly customerModel : Model<CustomerDocument> ){}
  async create(@Body() purchasedItem : any, user_id : string) {
      
    const newcustomer = new this.customerModel({
        purchase_id : purchasedItem,
        user_id : user_id
      });   

      const customer = await newcustomer.save();

  }

  async addCustomer(userid : string, purchaseId : any) {
      const customer = new this.customerModel({
        user_id : userid,
        purchase_id : purchaseId
      });
      const newCustomer = await customer.save();
      return newCustomer;


  }

  async getCustomers() {
    return await this.customerModel.find(); 
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
