import { Router } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUsersService } from "../services/CreateUsersService";

const userRoutes = Router();
const usersRepository = new UsersRepository();

userRoutes.get('/', (req, res)=>{
    const users = usersRepository.all();

    return res.json({users});
})

userRoutes.post('/', (req, res)=>{
    const { name, email, password, cpf} = req.body;

    const createUserService = new CreateUsersService(usersRepository);
    const user = createUserService.execute({name, email, password, cpf});

    return res.json(user);
    
});

export {userRoutes};