import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserEntity } from 'src/models/enities/createUser.entity';
import { Repository } from 'typeorm';
import { AddressEntity } from 'src/models/enities/address.entity';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(@InjectRepository(createUserEntity) private UserRepository:Repository<createUserEntity>,
    @InjectRepository(AddressEntity)private addressRepository:Repository<AddressEntity>){}

    async createUser(data:createUserEntity):Promise<any>{
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
}
