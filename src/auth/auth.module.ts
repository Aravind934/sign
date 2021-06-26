import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/enities/createUser.entity';
import { userAddress } from 'src/models/enities/address.entity';

@Module({
  imports:[
  TypeOrmModule.forFeature([User,userAddress])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
