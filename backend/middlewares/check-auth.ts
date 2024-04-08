import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function checkAuth(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.get("access-token");


    if (!accessToken) {
        return res.sendStatus(403);
    }

    try {
        const decoded = jwt.verify(accessToken, "dmngo");
        console.log({ decoded });
        next();
    } catch (error) {
        return res.sendStatus(403);
    }
}