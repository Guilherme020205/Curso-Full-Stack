import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name,email, password}: UserRequest) {
        
        // verificando se ele enviou o email
        if(!email){ 
            throw new Error("Email incorreto")
        }

        // verificando se esse email já existe na plataforma 

        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExist){
            throw new Error("Email já cadastrado")
        }

        const passwordHash = await hash(password, 8);

        // cadastra usuario no banco
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        return user
    }
}

export { CreateUserService }