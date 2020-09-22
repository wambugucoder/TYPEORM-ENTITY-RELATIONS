import {Connection, getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

// CREATE USER
export const PostUser = async (req: Request, res: Response, next: NextFunction)=>{

    const userRepository = getRepository(User);
    userRepository.save(req.body)
        .then((saved) => { res.status(200).json(saved) })
        .catch((err) => { res.json(err) });
}


// GET USERS
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {

    const userRepository = getRepository(User);
    userRepository.find({ relations:["address"] })
        .then((users) => { res.status(200).json(users) })
        .catch((err) => { res.json(err) });



}

// UPDATE USER
export const UpdateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = getRepository(User);

    userRepository.update(req.params.id,req.body)
    .then((update) => { res.status(200).json(update) })
    .catch((err) => { res.json(err) });

}