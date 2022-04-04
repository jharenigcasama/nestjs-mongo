import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePurchasedItemDto } from './dto/create-purchased_item.dto';
import { UpdatePurchasedItemDto } from './dto/update-purchased_item.dto';
import { PurchasedItem, PurchasedItemDocument } from './entities/purchased_item.entity';
import mongoose from 'mongoose';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class PurchasedItemService {
  constructor(@InjectModel(PurchasedItem.name) private readonly purchaseItem : Model<PurchasedItemDocument>, private  customerService : CustomerService){}

  async create( createPurchasedItemDto : CreatePurchasedItemDto) {
    var arr = [];
    const purchase = await this.purchaseItem.insertMany(createPurchasedItemDto);
    purchase.forEach(iteration => {
      arr.push(purchase[0]._id);
      // console.log(mongoose.Types.ObjectId.isValid(purchase[0]._id));
    });
    const userid = "62466ea8dc01fd233612ba7e";
     const customer =  await this.customerService.addCustomer(userid, purchase); 
      console.log(customer);
    // console.log(arr); 
    return purchase;   
  }

  getAllProduct(){
    return this.purchaseItem.find();
  }

 async getAggregateProd() {
   return await this.purchaseItem.find().populate('item_id', 'name price' ).exec();
    
    
  }

  // update(id: number, updatePurchasedItemDto: UpdatePurchasedItemDto) {
  //   return `This action updates a #${id} purchasedItem`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} purchasedItem`;
  // }
}
