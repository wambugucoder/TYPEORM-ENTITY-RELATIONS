import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";


export const PostUser = async (req: Request, res: Response, next: NextFunction)=>{
    
    const userRepository = getRepository(User);
    userRepository.save(req.body)
        .then((saved) => { res.status(200).json(saved) })
        .catch((err) => { res.json(err) });
}

