import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentController } from './apartment.controller';
import { Apartment } from './apartment.entity';
import { ApartmentRepository } from './apartment.repository';
import { ApartmentService } from './apartment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment])],
  controllers: [ApartmentController],
  providers: [ApartmentService, ApartmentRepository],
  exports: [ApartmentService],
})
export class ApartmentModule {}
