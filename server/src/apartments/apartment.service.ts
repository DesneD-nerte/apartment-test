import { Injectable } from '@nestjs/common';
import { ApartmentRepository } from './apartment.repository';

@Injectable()
export class ApartmentService {
  private apartmentRepository: ApartmentRepository;

  constructor(apartmentRepository: ApartmentRepository) {
    this.apartmentRepository = apartmentRepository;
  }

  async getAll() {
    return await this.apartmentRepository.getAll();
  }
}
