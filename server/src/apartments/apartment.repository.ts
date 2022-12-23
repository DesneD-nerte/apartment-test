import { Injectable } from '@nestjs/common';
import { Between, DataSource, In } from 'typeorm';
import { Apartment } from './apartment.entity';
import { PriceInput, AreaInput, SelectSort } from './apartment.interfaces';

@Injectable()
export class ApartmentRepository {
  constructor(private dataSource: DataSource) {}

  private apartmentRepository = this.dataSource.getRepository(Apartment);

  async getAllByParam(
    page?: number,
    price?: PriceInput,
    rooms?: number[],
    area?: AreaInput,
  ) {
    const apartmentList = await this.apartmentRepository.findBy({
      price: Between(
        price?.priceStart || 0,
        price?.priceEnd || Number.MAX_SAFE_INTEGER,
      ),
      rooms: In(rooms || [1, 2, 3, 4]),
      area_kitchen: Between(
        area?.areaKitchen.kitchenStart || 0,
        area?.areaKitchen.kitchenEnd || Number.MAX_SAFE_INTEGER,
      ),
      area_live: Between(
        area?.areaLive.liveStart || 0,
        area?.areaLive.liveEnd || Number.MAX_SAFE_INTEGER,
      ),
      area_total: Between(
        area?.areaTotal.totalStart || 0,
        area?.areaTotal.totalEnd || Number.MAX_SAFE_INTEGER,
      ),
    });

    // if (page) {
    //   const fromPosition = (page - 1) * 8;
    //   const toPosition = (page - 1) * 8 + 8;

    //   return apartmentList.slice(fromPosition, toPosition);
    // }

    return apartmentList;
  }

  async getAll() {
    return await this.apartmentRepository.find();
  }

  async getOne(apartmentId: number) {
    return this.apartmentRepository.findOneBy({ id: apartmentId });
  }
}
