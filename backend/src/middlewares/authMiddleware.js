import { verifyToken } from "../utils/jwt.js";

export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).send({
            error: "Token não fornecido!"
        });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).send({
            error: "Token inválido ou expirado."
        });
    }
}

