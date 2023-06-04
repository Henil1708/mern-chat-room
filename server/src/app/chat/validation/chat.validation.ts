// Import Joi
import joi from "joi";

/*============================
😎 @author: Henil Mehta
🚩 @uses: create auth schema for body validation 
🗓 @created: 03/06/2023
============================*/
const chatSchema = {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: create room validation 
    🗓 @created: 03/06/2023
    ============================*/
    createRoom: joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
        body: joi.object().keys({
            title: joi.string().required()
        })
    }),

    getRoom:joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
        params: joi.object().keys({
            room_uuid: joi.string().uuid().required()
        })
    })

}

export default chatSchema;