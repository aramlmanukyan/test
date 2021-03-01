import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: 'eX24e_cqB+MePHgh',
  database: 'taskmanager',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
