import crypto from 'crypto';

export const random = ()=> crypto.randomBytes(128).toString("base64")

export const authentication =(salt:String,password:string) =>{
    return crypto.createHmac('sha256',[salt,password].join('/'))
    .update(process.env.SECRET as string).digest('hex')
}