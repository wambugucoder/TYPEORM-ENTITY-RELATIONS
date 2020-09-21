import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { Address } from "./Address";

import { Tweet } from "./Tweet";

@Entity("user_table")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar"})
    Name: string;

    @Column({type:"varchar",unique:true})
    email: string;

    @Column({type:"varchar"})
    password: string;

    @OneToOne((type) => Address, (address: Address) => address.user, {
        // With the cascade option, we can save the User object containing nested address data
        cascade: true,
        //Load relationships automatically
       // eager: true
    })
    @JoinColumn()
    address: Address;
    
    @OneToMany((type) => Tweet, (tweet: Tweet) => tweet.author, {
        
    })
    tweets: Tweet[];
}
