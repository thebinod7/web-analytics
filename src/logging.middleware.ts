// logging.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppService } from './app.service';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly service: AppService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const startTime = new Date();
    const pageVisited = req.originalUrl;
    this.service.logUserActivity(req, pageVisited, startTime);
    next();
  }
}
