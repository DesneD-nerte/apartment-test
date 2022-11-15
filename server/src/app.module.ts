import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import getTypeOrmConfig from './config/config.service';
import { ApartmentModule } from './apartments/apartment.module';
import { Apartment } from './apartments/apartment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // TypeOrmModule.forRoot(getTypeOrmConfig()),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // localhost
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'apartment_test',
      entities: [Apartment],
    }),
    ApartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
