// Import Libraries
import { NextFunction, Request, Response } from 'express';
import joi from 'joi'

// Import status Code
import statusCodes from 'http-status-codes';


/*============================
😎 @author: Henil Mehta
🚩 @uses: created validator to validate body at route level 
🗓 @created: 03/06/2023
============================*/
const validator = function (schema: any) {
    return (req: Request, res: Response, next: NextFunction) => {
        var errors: any = {};
        const rules = schema.validate(req);
        if (rules.error) {
            var error = rules.error.details;
            var firstError: string = error[0].context.key;

            for (var e of error) {
                let key: string = e.context.key;
                let label: string = e.context.label;
                errors[key] = e.message.replace(/['"]+/g, '').replace('body.', '');
            }
            return res.status(statusCodes.BAD_REQUEST).send({
                status: "error",
                message: errors[firstError],
                errors,
            });
        } else {
            next();
        }
    }
}

const paginationSchema = joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
        query: joi.object().keys({
            per_page: joi.string().required(),
            page: joi.string().required()
        })
    })

//
//validation of uuid
//
const uuidSchema = joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
        params: joi.object().keys({
            uuid: joi.string().uuid().trim().required()
        })
    })

export { validator, paginationSchema , uuidSchema};
