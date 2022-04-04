import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductItemDto } from './dto/create-product_item.dto';
import { UpdateProductItemDto } from './dto/update-product_item.dto';
import { ProductItem, ProductItemDocument } from './entities/product_item.entity';
import { Model } from 'mongoose';
 
@Injectable()
export class ProductItemService {
    constructor(@InjectModel(ProductItem.name) private readonly productItem :  Model<ProductItemDocument>){}
  
  async create(createProductItemDto: CreateProductItemDto) {
    try {
      const product = new this.productItem(createProductItemDto);
      const new_prod = await product.save();
      return new_prod;   
    } catch (error) {
      return new HttpException('', HttpStatus.NOT_ACCEPTABLE);
    }
    
   
  }

  async getAllProduct(){
    return await this.productItem.find();
  }
  // findAll() {
  //   return `This action returns all productItem`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} productItem`;
  // }

  // update(id: number, updateProductItemDto: UpdateProductItemDto) {
  //   return `This action updates a #${id} productItem`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} productItem`;
  // }
}
