import {v4 as uuidV4} from 'uuid';

interface IItem{
    id:string;
    description:string;
    value:number;
    date:Date;   
} 

class User{
    id: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    accountBalance: number;
    incomes: Array<IItem>;
    outcomes: Array<IItem>;
    created_at: Date;
    updated_at: Date;

    constructor(name: string, email: string, cpf: string, password: string){
        this.id = uuidV4();
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.password = password;
        this.accountBalance = 0;
        this.incomes = [];
        this.outcomes = [];
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}

export {User};