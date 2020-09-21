import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from "./User";

@Entity("address_table")
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  street: string;
  
  @Column({ type: "varchar" })
  city: string;
  
  @Column({ type: "varchar" })
  country: string;

  @OneToOne(()=> User,(user:User)=>user.address)
  user:User
}
