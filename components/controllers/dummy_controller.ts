import { Request, Response, NextFunction } from 'express';
import { Component } from 'merapi';

export default class DummyController extends Component {
  constructor() {
    super();
  }

  public async ok(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).send({ status: 'ok' });
  }
}
