import { Request, Response } from "express";
export declare class authController {
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    verify: (req: any, res: any) => void;
}
