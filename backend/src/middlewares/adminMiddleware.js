export function adminMiddleware(req, res, next) {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).send({
            error: "Acesso negado! Apenas administradores podem acessar."
        });
    }
    next();
}
