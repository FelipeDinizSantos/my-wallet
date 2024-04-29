import { User } from "../models/User";

interface IUser{
    name: string;
    email: string;
    password: string;
    cpf: string;
}

class UserRepository{
    private users:User[];

    constructor(){
        this.users = [];
    }

    create({name, email, password, cpf}:IUser): User{
        const user = new User(name, email, cpf, password);

        this.users.push(user);
        return user;
    } 

    all():User[]{
        return this.users;
    }
}

export {UserRepository};