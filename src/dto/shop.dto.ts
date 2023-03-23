export class CreateProduct {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  titulo: string;
}