import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import baseConfig from './config/base-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [baseConfig],
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig,
    }),
  ],
})
export class AppModule {}
