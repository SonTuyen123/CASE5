import { Request, Response } from "express";
export declare class UserController {
    static upload(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static listMp3(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static createCustomer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static showList(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static findUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static UploadImgUser(req: Request, res: Response): Promise<void>;
    static deleteUsers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static deleteMp3(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static showFormEditCustomer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static editUsers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static register(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static verify(req: Request, res: Response): Promise<void>;
}
declare const _default: UserController;
export default _default;
