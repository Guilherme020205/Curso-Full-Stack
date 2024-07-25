import prismaClient from "../../prisma";

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

        // cadastra usuario no banco
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password,
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