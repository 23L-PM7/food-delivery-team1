import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { secret } from "../controller/users.controller";

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  const authorization = req.header("Authorization");

  const accesstoken = authorization?.split(" ")[1];

  if (!accesstoken) {
    return res.sendStatus(403);
  }

  try {
    jwt.verify(accesstoken, secret);
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
  // const accessToken = req.get("access-token");

  // if (!accessToken) {
  //   return res.sendStatus(403);
  // }

  // try {
  //   const decoded = jwt.verify(accessToken, secret);
  //   console.log({ decoded });
  //   next();
  // } catch (error) {
  //   return res.sendStatus(403);
  // }
}
