import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController, PessoasController } from "../controllers";


const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá Dev! Funcionando.')
})

router.post('/pessoas',PessoasController.create);

router.post('/cidades',CidadesController.create);






export {router};