import { PrismaClient } from "@prisma/client";
import { Console } from "console";

interface CreateCustomerProps{
    name:string;
    email:string;
}

class CreateCustomerService{
    async execute({name,email}:CreateCustomerProps){
           
       if(!name || !email) {
        throw new Error("preencha todos os campos")
       }
         
         const customer = await PrismaClient.customer.create({
            data:{
               name, 
               email,
               status:true
            }
         })
          
           
         return customer
    }
}

export {CreateCustomerService}