import { Controller, Get, Param, Query, Response } from '@nestjs/common';
import { Response as Res } from 'express';
import { AreaInput, PriceInput, SelectSort } from './apartment.interfaces';
import { ApartmentService } from './apartment.service';

@Controller('apartments')
export class ApartmentController {
  constructor(private apartmentService: ApartmentService) {}

  @Get('/')
  async findAll(
    @Query()
    {
      page,
      price,
      rooms,
      area,
      sort,
    }: {
      page: number;
      price: PriceInput;
      rooms: number[];
      area: AreaInput;
      sort: SelectSort;
    },
    @Response() res: Res,
  ) {
    const { contentRange, apartments } = await this.apartmentService.getAll(
      page,
      price,
      rooms,
      area,
      sort,
    );
    res.set('Content-Range', contentRange.toString());

    return res.json(apartments);
  }

  @Get(':apartmentId')
  async findOne(@Param('apartmentId') apartmentId: number) {
    return await this.apartmentService.getOne(apartmentId);
  }
}
