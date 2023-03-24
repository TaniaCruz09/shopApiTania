import { IsNotEmpty, MinLength, IsString } from 'class-validator';
import {
  IsNumber,
  IsOptional,
} from 'class-validator/types/decorator/decorators';
import { Unique } from 'typeorm';

export class CreateProduct {
  @IsString()
  @IsNotEmpty()
  @Unique(['title'])
  title: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsString()
  @IsOptional()
  @MinLength(15)
  description: string;

  @IsString()
  @IsOptional()
  slug: string;

  @IsOptional()
  @IsNumber()
  stock: number;

  @IsString()
  @IsOptional()
  gender: string;
}
