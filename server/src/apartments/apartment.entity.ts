import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'apartments' })
export class Apartment {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'integer' })
  floor: number;

  @Column({ type: 'integer' })
  pos_on_floor: number;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'integer' })
  rooms: number;

  @Column({ type: 'real' })
  area_total: number;

  @Column({ type: 'real' })
  area_kitchen: number;

  @Column({ type: 'real' })
  area_live: number;

  @Column({ type: 'text' })
  layout_image: string;
}
