import { PartialType } from '@nestjs/swagger';
import { CreatePurchasedItemDto } from './create-purchased_item.dto';

export class UpdatePurchasedItemDto extends PartialType(CreatePurchasedItemDto) {}
