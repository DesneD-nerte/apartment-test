import { Injectable } from '@nestjs/common';
import { Apartment } from './apartment.entity';
import { PriceInput, AreaInput, SelectSort } from './apartment.interfaces';
import { ApartmentRepository } from './apartment.repository';

@Injectable()
export class ApartmentService {
  private apartmentRepository: ApartmentRepository;

  constructor(apartmentRepository: ApartmentRepository) {
    this.apartmentRepository = apartmentRepository;
  }

  async getAll(
    page?: number,
    price?: PriceInput,
    rooms?: number[],
    area?: AreaInput,
    sort?: SelectSort,
  ) {
    let apartmentList = await this.apartmentRepository.getAllByParam(
      undefined,
      price,
      rooms,
      area,
    );

    if (sort) {
      apartmentList = this.sortList(apartmentList, sort);
    }

    const contentRange = apartmentList.length;

    if (page) {
      const fromPosition = (page - 1) * 8;
      const toPosition = (page - 1) * 8 + 8;

      apartmentList = apartmentList.slice(fromPosition, toPosition);
    }

    return { contentRange, apartments: apartmentList };
  }

  sortList(apartmentList: Apartment[], sort: SelectSort) {
    return apartmentList.sort((oneApartment, secondApartment) => {
      if (sort == 'PriceLowToHigh') {
        return oneApartment.price - secondApartment.price;
      }
      if (sort == 'PriceHighToLow') {
        return secondApartment.price - oneApartment.price;
      }
      if (sort == 'AreaLowToHigh') {
        return oneApartment.area_total - secondApartment.area_total;
      }
      if (sort == 'AreaHighToLow') {
        return secondApartment.area_total - oneApartment.area_total;
      }

      return oneApartment.price;
    });
  }

  async getOne(apartmentId: number) {
    return await this.apartmentRepository.getOne(apartmentId);
  }
}
