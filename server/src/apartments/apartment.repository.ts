import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Apartment } from './apartment.entity';

@Injectable()
export class ApartmentRepository {
  constructor(private dataSource: DataSource) {}

  async getAll(page?: number) {
    const apartmentRepository = this.dataSource.getRepository(Apartment);
    let apartmentList;

    let skipLength = 0;
    if (page) {
      if (page >= 2) {
        skipLength = (page - 1) * 8;
      }
      apartmentList = await apartmentRepository.find({
        skip: skipLength,
        take: 8,
      });
    } else {
      apartmentList = await apartmentRepository.find();
      console.log(123);
    }
    return apartmentList;
  }
}
