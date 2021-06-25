import {AddressIn} from '../interfaces/AddressInterface.interface'

export class registerUserDto{
    firstname:string
    lastname:string
    email:string
    password:string
    mobile:string
    gender:string
    address:AddressIn
}