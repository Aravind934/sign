import { Controller, Post, Body ,Get } from '@nestjs/common';
import { registerUserDto } from 'src/models/dtos/registerUser.dto';
import { createUserEntity } from 'src/models/enities/createUser.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Post('/register')
    register(@Body() body:registerUserDto):Promise<any>{
      return this.authService.createUser(body)
    }

    @Get('/login')
    login(){
        return 'login'
    }

}
