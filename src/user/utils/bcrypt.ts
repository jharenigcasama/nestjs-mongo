import * as bcrypt from 'bcrypt';

export function hashPassword(password : string){
    const SALT  = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, SALT);
}

export function comparePassword(rawPass : string, hassPass : string){
    return bcrypt.compareSync(rawPass, hassPass);
}
