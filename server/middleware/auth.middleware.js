import jwt from "jsonwebtoken";

//validates token 
export default function auth(req,res,next){

    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message:"No token provided"
        });
    }

    const actualToken = token.replace("Bearer ","");

    try{
        const decoded = jwt.verify(
            actualToken,
            process.env.JWT_SECRET
        );

        req.auth = decoded;

        next();

    }
    catch(error){

        return res.status(401).json({
            message:"Invalid token"
        });

    }

}