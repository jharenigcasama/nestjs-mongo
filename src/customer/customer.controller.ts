import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('add')
  addNewCustomer(@Body() userid : string){
    // return this.customerService.addCustomer(userid);
  }  


  @Get('')
  getCustomer(){
    return this.customerService.getCustomers();
  }
 
}
