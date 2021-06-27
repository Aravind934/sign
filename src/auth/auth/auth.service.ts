import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/enities/createUser.entity';
import { Repository } from 'typeorm';
import { userAddress } from 'src/models/enities/address.entity';
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { loginUserDto } from 'src/models/dtos/loginUser.dto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private UserRepository:Repository<User>,
    @InjectRepository(userAddress)private addressRepository:Repository<userAddress>){}

    async createUser(data:User):Promise<any>{
      try{
        //saving address
        let address = await this.addressRepository.save(data.address)
        //password hashed
        data.password = await bcrypt.hash(data.password,10)
        let res = await this.UserRepository.save({addressId:address.id,...data})
        if(res){
          return{success:true,message:'Registraion successful'}
        }
        else{
          return {success:false,message:'Something went wrong'}
        }
      }
      catch(err){
        if(err.errno === 19){
          return {success:false,message:'Email or Mobile number already exists!'}
        }
        else throw err
      }
    }
    //User Registration End

    async loginUser(data:loginUserDto):Promise<any>{
       let user = await this.UserRepository.findOne({email:data.email})
       if(user){
        if(await bcrypt.compare(data.password,user.password)){
         let token = await jwt.sign({email:user.email},process.env.JWT_KEY,{expiresIn:'1h'})
         return {
           success:true,
           message:`Login successful!`,
           token,
           user:user.firstname
         }
        }
        else return {
          success:false,
          message:`Password mismatch`
        }
       }
       else{
         return {
           success:false,
           message:`Email not exists`
         }
       }
    }
    //User Login Over

    async getEmail(data:{email:string}):Promise<any>{
            if(await this.UserRepository.findOne({email:data.email})){
              return {
                success:false,
                message:`Email alredy exists`
              }
            }
            else{
              return{
                success:true,
                message:`Email available`
              }
            }
    }
}
