import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

interface IRequest{
    name: string;
    email: string;
    password: string;
    cpf: string;
}

class CreateUserService{
    execute({name, email, password, cpf}:IRequest): User{
        const userRepository = new UserRepository();
        const user = userRepository.create({name, email, password, cpf});

        return user;
    }
}

export { CreateUserService };