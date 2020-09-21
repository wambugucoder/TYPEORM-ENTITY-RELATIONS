import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from './User';

@Entity("tweet_table")
export class Tweet {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({type:"varchar"})
  data: string;

  @ManyToOne(()=>User,(user:User)=>user.tweets)
  author: User;
}
 
