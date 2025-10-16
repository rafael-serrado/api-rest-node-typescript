import { Request, Response } from "express";



interface IPessoa {
    nome: string
}

export const create = (req: Request, res: Response) => {
    const date: IPessoa = req.body
    console.log(date.nome)
    return res.send('Created Person!');
};