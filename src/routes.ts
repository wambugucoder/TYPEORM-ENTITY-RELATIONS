import * as express from "express";
import { FetchTweets, tweet } from "./controller/TweetController";
import { PostUser } from "./controller/UserController";

const router = express.Router();

//USER ROUTES
router.post("/create", PostUser);

//TWEET ROUTES
router.post("/tweet", tweet);
router.get("/fetch", FetchTweets);




export default router;