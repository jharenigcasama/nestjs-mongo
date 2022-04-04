import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchasedItemService } from './purchased_item.service';
import { CreatePurchasedItemDto } from './dto/create-purchased_item.dto';
import { UpdatePurchasedItemDto } from './dto/update-purchased_item.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Purchase product')
@Controller('purchased-item')
export class PurchasedItemController {
  constructor( private readonly purchasedItemService: PurchasedItemService) {}

  @Post('')
  create(@Body() createPurchasedItemDto: CreatePurchasedItemDto) {
    return this.purchasedItemService.create(createPurchasedItemDto);
  }

  @Get('')
  getAll(){
      return this.purchasedItemService.getAllProduct();
  }

  @Get('showItems')
  getAllProduct(){

      return this.purchasedItemService.getAggregateProd();
  }

 
}
