import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as path from 'path';

import { AppModule } from './app/app.module';

@Module({
  imports: [
    AppModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      path: '/',
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.resolve(process.cwd(), 'data/bookshelf.sqlite'),
      autoLoadEntities: true,
      logging: true,
    }),
  ],
})
export class ServerModule {}
