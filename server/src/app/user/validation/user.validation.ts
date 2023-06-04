// Import Joi
import joi from "joi";

// import Config
import i18n from "../../../config/i18n";


/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
👑 @creator : Henil mehta
🚩 @uses : create user schema for body validation
🗓 @created : 25/8/2022
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const userSchema = {

    //
    //  body validation for update user API
    //
    updateUser: joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
            body: joi.object().keys({
                first_name: joi.string().required().messages({'string.empty':i18n.__('name_validation')}),
                last_name: joi.string().allow(null),
                gender:joi.string().valid('MALE','FEMALE'),
                date_of_birth: joi.date().iso().messages({'date.format': `Date format must be in YYYY-MM-DD format`}).required()
            })
        })

}

export default userSchema;
