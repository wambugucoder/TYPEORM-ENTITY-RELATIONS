import {getRepository, Like} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Tweet } from "../entity/Tweet";



// POST A TWEET
export const tweet = async(req:Request, res:Response, next:NextFunction) => {
  const tweetRepository = getRepository(Tweet);
  tweetRepository.save(req.body)
    .then((saved) => { res.json(saved) })
    .catch((err) => { res.json(err) });


}

// FETCH ALL TWEETS
export const FetchTweets = async(req:Request, res:Response, next:NextFunction) => {
  const tweetRepository = getRepository(Tweet);
  tweetRepository.find(
    {
      relations: ['author'] ,
      where: { data:Like("% monday%")}
    })

    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });
}