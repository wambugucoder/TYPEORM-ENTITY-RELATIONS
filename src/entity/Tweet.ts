import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { User } from './User';

@Entity("tweet_table")
export class Tweet  {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({type:"varchar"})
  data: string;

  @ManyToOne(()=>User,(user:User)=>user.tweets,{ 
    cascade:true,
    onDelete: 'CASCADE',
    onUpdate: "CASCADE"
  })
  author: User;
}
 
