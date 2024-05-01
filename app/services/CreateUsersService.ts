import { User } from "../models/User";
import { UsersRepository } from "../repositories/UsersRepository";
import { AppError } from "../errors/AppError";

interface IRequest{
    name: string;
    email: string;
    password: string;
    cpf: string;
}

class CreateUsersService{
    constructor(private userRepository:UsersRepository){
        this.userRepository = userRepository;
    }

    execute({name, email, password, cpf}:IRequest): User{
        const isUserExist = this.userRepository.findByEmailOrCPF({email, cpf})

        if(isUserExist){
            throw new AppError('User already exist!');    
        }

        const user = this.userRepository.create({name, email, password, cpf});
        return user;
    }
}

export { CreateUsersService };