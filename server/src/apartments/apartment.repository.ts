import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Apartment } from './apartment.entity';

@Injectable()
export class ApartmentRepository {
  constructor(private dataSource: DataSource) {}

  async getAll() {
    const apartmentRepository = this.dataSource.getRepository(Apartment);
    const apartmentList = await apartmentRepository.find();

    return apartmentList;
  }
}
