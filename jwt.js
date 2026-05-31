import jwt from 'jsonwebtoken';

const secret='mysecret key for jwt';

export function generateToken(payload){
    return jwt.sign(payload,secret,{expiresIn:'1h'});
}

export function verifyToken(token){
    return jwt.verify(token,secret);
}

