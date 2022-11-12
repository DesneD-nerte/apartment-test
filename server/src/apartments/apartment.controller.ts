import { Controller, Get, Query } from '@nestjs/common';
import { ApartmentService } from './apartment.service';

@Controller('apartments')
export class ApartmentController {
  constructor(private apartmentService: ApartmentService) {}

  @Get('/')
  async findAll(@Query() { page }: { page: number }) {
    return await this.apartmentService.getAll(page);
  }
}
