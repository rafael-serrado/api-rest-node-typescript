import { Request, Response } from "express";
import * as yup from "yup"



interface ICidade {
    nome: string
}
const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3)
})


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validateDate: ICidade | undefined = undefined

    try {
        validateDate = await bodyValidation.validate(req.body);
    } catch (error) {
        const yupError = error as yup.ValidationError

        return res.json({
            errors: {
                default: yupError.message
            }
        })
    }
    console.log(req.body.nome)
    return res.send(validateDate);
};