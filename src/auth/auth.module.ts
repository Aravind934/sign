import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createUserEntity } from 'src/models/enities/createUser.entity';
import { AddressEntity } from 'src/models/enities/address.entity';

@Module({
  imports:[
  TypeOrmModule.forFeature([createUserEntity,AddressEntity])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
