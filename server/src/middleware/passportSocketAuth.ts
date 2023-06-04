
// Import Config
import i18n from '../config/i18n';
import config from '../config/constant';

// Import Static

// Import Helpers

// Import Transformers

// Import Libraries

// Import Models


// Import Thirdparty
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { NextFunction, Request, Response } from "express";
import statusCodes from 'http-status-codes';
import userRepo from '../app/user/repo/user.repo';
import authHelper from '../app/auth/helper/auth.helper';

class PassportSocketAuth {

    constructor() {
        let jwtOptions = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.app.JWT_SECRET_KEY,
        };
        passport.use(new JwtStrategy(jwtOptions, this.verifyJwt));

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: to verify the JWT Token 
    🗓 @created: 03/06/2023
    ============================*/
    async verifyJwt (payload:any,done:any) {
        
        try {
            
            const user = await userRepo.getUserByUuid(payload.user_uuid);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
    
        } catch (error) {
            
            const err:any = new Error(i18n.__('un_authorized'))
            err.statusCode = statusCodes.UNAUTHORIZED;
            return done(err, false);
    
        }
    }

}

export default new PassportSocketAuth();