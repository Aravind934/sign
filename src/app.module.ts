import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type:"sqlite",
      database:"db",
      entities:["dist/**/*.entity{.js,.ts}"],
      synchronize:true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
