import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioServices from "../services/usuario_services";

class usuario_controller{
    constructor(){}
    async createUser(request: Request, response: Response){
        try{
            const user : Prisma.UsuarioCreateInput = request.body;
            const newUser = await UsuarioServices.createUsuario(user)
            return response.status(200).json({
                status: 'ok',
                newUser: newUser
            })
        }
        catch(error){
            return response.status(500).json({
                error: error,
                message: 'inserir os dados requisitados'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const users = UsuarioServices.listUsuario();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUser(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUser(req: Request, res: Response){
        res.send('Delete user');
    }
}
export default new usuario_controller;