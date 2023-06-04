
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

class PassportAuth {

    constructor() {
        let jwtOptions = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.app.JWT_SECRET_KEY,
        };
        passport.use(new JwtStrategy(jwtOptions, this.verifyJwt));
        passport.use('login',new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            session: false
        }, this.login));
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


    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: to login the user
    🗓 @created: 03/06/2023
    ============================*/
    async login (email:any, password:any, done:any) {

        try {

            const user = await userRepo.getUserByEmail(email);

            if(!user) {
                const err:any = new Error(i18n.__('no_email_user_exist'));
                err.statusCode = statusCodes.BAD_REQUEST;
                throw err;
            } 

            //
            // Compare the password
            //
            const pass = await authHelper.comparePassword(password, user.password);

            if(pass) {
                
                return done(null,user);

            } else {

                const err:any = new Error(i18n.__('invalid_credentials'));
                err.statusCode = statusCodes.UNAUTHORIZED;
                throw err;

            }

        } catch (error) {

            return done(error,false);

        }

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: authenticate Jwt 
    🗓 @created: 03/06/2023
    ============================*/
    async authenticateJwt (req:any, res:Response, next:NextFunction) {
        passport.authenticate('jwt', { session: false }, (error:any, user:any) => {
            if (user) {
                req.logged_in_user = user;
            }
            next();
        })(req, res, next);
    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: user login  
    🗓 @created: 03/06/2023
    ============================*/
    async loginUser(req:any, res:any, next:NextFunction) {
        
        passport.authenticate('login', (err:any, user:any, info:any) => {

            if (err) {  

                req.error = {
                    message: err.message,
                    code: err.statusCode
                }

            }
            if (info !== undefined) {

                req.error = {
                    message: err.info,
                    code: statusCodes.UNAUTHORIZED
                }

            } else {
                req.user = user;
            }
            next();
        })(req, res, next);
    }

}

export default new PassportAuth();