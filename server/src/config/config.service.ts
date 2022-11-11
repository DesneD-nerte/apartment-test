import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function getPort() {
  const port = process.env.DATABASE_PORT;

  if (!port) {
    throw new Error("Config error, post doesn't set");
  }

  return parseInt(port);
}

export default function getTypeOrmConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: getPort(),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,

    entities: ['**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
  };
}
