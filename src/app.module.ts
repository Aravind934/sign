import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type:"sqlite",
      database:"db",
      entities:["dist/**/*.entity{.js,.ts}"],
      synchronize:true
    }),
    ConfigModule.forRoot({
      isGlobal:true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
