import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class userAddress{
        @PrimaryGeneratedColumn("uuid")
        id?:number
        @Column()
        line1:string
        @Column({nullable:true})
        line2?:string
        @Column()
        city:string
        @Column()
        state:string
        @Column()
        country:string
        @Column()
        postalcode:string
    
    
}