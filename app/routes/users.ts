import { Router } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { GetUsersService } from "../services/GetUsersService";

const userRoutes = Router();

userRoutes.get('/', (req, res)=>{
    const getUsersService = new GetUsersService();
    const users = getUsersService.execute();

    return res.json({users});
})

userRoutes.post('/', (req, res)=>{
    const { name, email, password, cpf} = req.body;
    const createUserService = new CreateUserService();

    const user = createUserService.execute({name, email, password, cpf});

    return res.json(user);
});

export {userRoutes};