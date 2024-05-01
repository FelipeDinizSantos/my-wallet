import { User } from "../models/User";

interface IUser{
    name: string;
    email: string;
    password: string;
    cpf: string;
}

interface IFindUser{
    email: string;
    cpf: string; 
}

class UsersRepository{
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

    findByEmailOrCPF({email, cpf}:IFindUser): User | undefined{
        const user = this.users.find(item => item.email === email || item.cpf === cpf);
        return user;
    }
}

export {UsersRepository};