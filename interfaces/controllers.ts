import { Request, Response, NextFunction } from 'express';

export interface IIndexController {
  hello(req: Request, res: Response, next: NextFunction): void;
}
