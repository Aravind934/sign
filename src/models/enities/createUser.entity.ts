import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
//import { AddressIn } from "../interfaces/AddressInterface.interface";
import { userAddress } from "./address.entity";

@Entity()
export class User{
  @PrimaryGeneratedColumn("uuid")
  id?:number
  @Column()
  firstname:string
  @Column()
  lastname:string
  @Column({unique:true})
  email:string
  @Column()
  password:string
  @Column({unique:true})
  mobile:string
  @Column()
  gender:string
  @OneToOne(()=>userAddress)
  @JoinColumn()
  address:userAddress
}