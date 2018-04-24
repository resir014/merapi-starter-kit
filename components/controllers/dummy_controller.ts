import { Request, Response, NextFunction } from 'express';
import { Component, ILogger } from 'merapi';

export default class DummyController extends Component {
  constructor(private logger: ILogger) {
    super();
  }

  public async ok(req: Request, res: Response, next: NextFunction): Promise<void> {
    this.logger.info('GET /info');
    res.status(200).send({ status: 'ok' });
  }
}
