import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text', unique: true })
  title: string;

  @Column({ type: 'numeric', nullable: true })
  price?: number;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'text', nullable: true })
  slug?: string;

  @Column({ type: 'numeric', default: 0, nullable: true })
  stock: number;

  @Column({ type: 'text' })
  gender: string;
}
