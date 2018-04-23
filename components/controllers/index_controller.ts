import { Component, IConfigReader, ILogger } from 'merapi';
import { Request, Response, NextFunction } from 'express';

import { IIndexController } from 'interfaces/controllers';

export default class IndexController extends Component implements IIndexController {
  constructor(private config: IConfigReader, private logger: ILogger) {
    super();
  }

  // GET /hello
  public hello(req: Request, res: Response, next: NextFunction): void {
    this.logger.info('GET /hello');
    res.send({ status: 'ok', data: { message: 'hello wordl!' } });
  }

  // GET /hello/:toWho
  public helloWithParams(req: Request, res: Response, next: NextFunction): void {
    this.logger.info(`GET /hello/${req.params.toWho}`);
    res.send({ status: 'ok', data: { message: `hello ${req.params.toWho}` } });
  }
}
