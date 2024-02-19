import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { join } from 'path';

import applicationConfig from './configs/application.config';
import databaseConfig from './configs/database.config';
import serverConfig from './configs/server.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationsModule } from './authorizations/authorizations.module';
import { ArticlesModule } from './endpoints/articles/articles.module';
import { CategoriesModule } from './endpoints/categories/categories.module';
import { SettingsModule } from './endpoints/settings/settings.module';
import { TagsModule } from './endpoints/tags/tags.module';
import { UsersModule } from './endpoints/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [applicationConfig, databaseConfig, serverConfig],
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) =>
        ({
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          playground: config.get('development'),
        }) as GqlModuleOptions,
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) =>
        ({
          type: 'postgres',
          host: config.get('database.host'),
          port: config.get('database.port'),
          database: config.get('database.name'),
          username: config.get('database.username'),
          password: config.get('database.password'),
          entities: [join(__dirname, '**', '*.entity.{ts,js}')],
          autoLoadEntities: true,
          synchronize: config.get('development'),
          logging: config.get('development'),
        }) as TypeOrmModuleOptions,
      inject: [ConfigService],
    }),
    AuthorizationsModule,
    // Endpoints
    ArticlesModule,
    CategoriesModule,
    SettingsModule,
    TagsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
