import * as express from "express";
import { FetchTweets, tweet } from "./controller/TweetController";
import { getUsers, PostUser } from "./controller/UserController";

const router = express.Router();

//USER ROUTES
router.post("/create", PostUser);
router.get("/users", getUsers);

//TWEET ROUTES
router.post("/tweet", tweet);
router.get("/fetch", FetchTweets);




export default router;