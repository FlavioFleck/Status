import { verifyToken } from "../utils/jwt.js";

export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({
            error: "Token não fornecido!"
        });
    }

    const [scheme, token] = authHeader.split(" ");

    if (scheme !== "Bearer" || !token) {
        return res.status(401).send({
            error: "Formato do token inválido. Use: Bearer <token>"
        });
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).send({
            error: "Token inválido ou expirado.",
            details: error.message
        });
    }
}
