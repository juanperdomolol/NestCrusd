import { IsString, IsNumber, Allow, IsNotEmpty } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly imageUrl: string;

  @IsNotEmpty()
  readonly price: number;

  @Allow()
  readonly createdAt: Date;
}
