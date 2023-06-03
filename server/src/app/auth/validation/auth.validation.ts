// Import Joi
import joi from "joi";

/*============================
😎 @author: Henil Mehta
🚩 @uses: create auth schema for body validation 
🗓 @created: 03/06/2023
============================*/
const authSchema = {

    //
    //  body validation for sign up API
    //
    signUp: joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
        body: joi.object().keys({
            email: joi.string().required().email(),
            password: joi.string().required()
        })
    }),

    //
    //  body validation for sign in API
    //
    signIn: joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
        body: joi.object().keys({
            email: joi.string().required().email(),
            password: joi.string().required()
        })
    }),
}

export default authSchema;