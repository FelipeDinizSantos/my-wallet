import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

class GetUsersService{
    execute():User[]{
        const userRepository = new UserRepository();
        const users = userRepository.all();

        return users;
    }
}

export {GetUsersService};