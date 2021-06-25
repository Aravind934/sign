import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { AddressIn } from "../interfaces/AddressInterface.interface";
import { AddressEntity } from "./address.entity";

@Entity()
export class createUserEntity{
  @PrimaryGeneratedColumn("uuid")
  id?:number
  @Column()
  firstname:string
  @Column()
  lastname:string
  @Column({unique:true})
  email:string
  @Column({select:false})
  password:string
  @Column({unique:true})
  mobile:string
  @Column()
  gender:string
  @OneToOne(()=>AddressEntity)
  @JoinColumn()
  address:AddressEntity
}