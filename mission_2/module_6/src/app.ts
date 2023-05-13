import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import productRouter from "./app/modules/product.route";

export const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/product", productRouter);
//app.get("/", (req: Request, res: Response, next: NextFunction) => {});
