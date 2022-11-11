import { Controller, Get } from '@nestjs/common';
import { ApartmentService } from './apartment.service';

@Controller('apartments')
export class ApartmentController {
  constructor(private apartmentService: ApartmentService) {}

  @Get('/')
  async findAll() {
    return await this.apartmentService.getAll();
  }
}
