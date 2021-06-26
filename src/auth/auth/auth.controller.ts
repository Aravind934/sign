import { Controller, Post, Body ,Get } from '@nestjs/common';
import { loginUserDto } from 'src/models/dtos/loginUser.dto';
import { registerUserDto } from 'src/models/dtos/registerUser.dto';
//import { User } from 'src/models/enities/createUser.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Post('/register')
    register(@Body() body:registerUserDto):Promise<any>{
      return this.authService.createUser(body)
    }

    @Post('/login')
    login(@Body()body:loginUserDto):Promise<any>{
        return this.authService.loginUser(body)
    }

}
