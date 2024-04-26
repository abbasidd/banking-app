import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SessionService } from './session.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly sessionService: SessionService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]; // Assuming token is sent in the Authorization header

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const session = this.sessionService.getSession(token);

    if (!session || session.expiryTime < Date.now()) {
      this.sessionService.deleteSession(token);
      return res.status(401).json({ message: 'Session expired' });
    }

    // Attach user ID to request for future use
    req['userId'] = session.userId;

    next();
  }
}
