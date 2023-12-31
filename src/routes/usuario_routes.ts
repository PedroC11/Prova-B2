import { Router } from "express";
import UsuarioController from "../controller/usuario_controller";

const UsuarioRoutes = Router();

UsuarioRoutes.get('/users', UsuarioController.listUsers)

UsuarioRoutes.post('/user', UsuarioController.createUser);

UsuarioRoutes.put('/user', UsuarioController.updateUser);

UsuarioRoutes.delete('/user', UsuarioController.deleteUser);

export default UsuarioRoutes;